const {
  getComponentLocalName,
  changeComponentName,
  changeImport,
  changeProperties,
  deleteProperty,
  updateTernaryValues,
  updatePropertyValue,
  getProperty,
  hasProperty,
  changeIdentifier,
  pipe,
  addImport,
  renameProperties,
} = require('../../utils');
const { shouldSkipUpdateImport, getImport } = require('../../utils/config');
const { isConditionalExpression } = require('../../utils/updateTernaryValues');

// V4 icon name : V5 icon name
const iconsMap = {
  Archive: 'FileArchive',
  ArrowBackward: 'ArrowLeft',
  ArrowDown: 'CaretDown',
  ArrowDownward: 'ArrowDown',
  ArrowForward: 'ArrowRight',
  ArrowUp: 'CaretUp',
  ArrowUpward: 'ArrowUp',
  Asset: 'ImageSquare',
  Audio: 'FileAudio',
  Calendar: 'CalendarBlank',
  ChatBubble: 'Chat',
  CheckCircle: 'CheckCircle',
  ChevronDown: 'CaretDown',
  ChevronLeft: 'CaretLeft',
  ChevronRight: 'CaretRight',
  ChevronUp: 'CaretUp',
  Clock: 'Clock',
  Close: 'X',
  CloudUpload: 'CloudArrowUp',
  Code: 'CodeSimple',
  CodeIllustration: 'BracketsCurly',
  Copy: 'CopySimple',
  Cycle: 'Repeat',
  Delete: 'TrashSimple',
  Diamond: 'SketchLogo',
  Done: 'Check',
  DoubleArrow: 'CaretUpDown',
  Download: 'DownloadSimple',
  Drag: 'DotsSixVertical',
  Edit: 'PencilSimple',
  EmbeddedEntryBlock: 'EmbeddedBlock',
  EmbeddedEntryInline: 'EmbeddedLine',
  Entry: 'Entry',
  Environment: 'Environment',
  EnvironmentAlias: 'EnvironmentAlias',
  ErrorCircle: 'WarningOctagon',
  ErrorCircleOutline: 'WarningOctagon',
  ExternalLink: 'ArrowSquareOut',
  FaceHappy: 'Smiley',
  Filter: 'FunnelSimple',
  Folder: 'FolderSimple',
  FolderCreate: 'FolderSimplePlus',
  FolderOpen: 'FolderOpen',
  FormatBold: 'TextB',
  FormatItalic: 'TextItalic',
  FormatUnderlined: 'TextUnderline',
  Gift: 'Gift',
  Heading: 'TextH',
  HeadingOne: 'TextHOne',
  HeadingTwo: 'TextHTwo',
  HelpCircle: 'Info',
  HelpCircleInverted: 'Info',
  HorizontalRule: 'Minus',
  Image: 'ImageSquare',
  InfoCircle: 'Info',
  Language: 'Globe',
  Link: 'LinkSimple',
  LinkAlternate: 'LinkSimple',
  ListBulleted: 'ListBullets',
  ListNumbered: 'ListNumbers',
  Lock: 'LockSimple',
  Logout: 'SignOut',
  Markup: 'FileCode',
  Menu: 'List',
  Minus: 'Minus',
  MoreHorizontal: 'DotsThree',
  Page: 'File',
  Pdf: 'FilePdf',
  Person: 'User',
  Plaintext: 'FileText',
  Plus: 'Plus',
  PlusCircle: 'Plus',
  Presentation: 'Presentation',
  Preview: 'Eye',
  PreviewOff: 'EyeClosed',
  Puzzle: 'PuzzlePiece',
  Quote: 'Quotes',
  Receipt: 'Receipt',
  References: 'Swap',
  Release: 'Release',
  Richtext: 'RichText',
  Search: 'MagnifyingGlass',
  Settings: 'GearSix',
  ShoppingCart: 'ShoppingCartSimple',
  Sort: 'CaretUpDown',
  SortAscending: 'SortAscending',
  SortDescending: 'SortDescending',
  Spreadsheet: 'Table',
  Star: 'Star',
  Subscript: 'TextSubscript',
  Superscript: 'TextSuperscript',
  Tab: 'Tabs',
  Table: 'Table',
  Tags: 'Tag',
  Text: 'TextT',
  ThumbDown: 'ThumbsDown',
  ThumbUp: 'ThumbsUp',
  Toggle: 'ArrowsLeftRight',
  TriangleOutline: 'Triangle',
  Users: 'Users',
  Video: 'FileVideo',
  Warning: 'Warning',
  Workflows: 'Workflows',
};

const variantToColorTokenMap = (j, tokensImportName) => ({
  primary: j.identifier(`${tokensImportName}.colorPrimary`),
  positive: j.identifier(`${tokensImportName}.colorPositive`),
  negative: j.identifier(`${tokensImportName}.colorNegative`),
  warning: j.identifier(`${tokensImportName}.colorWarning`),
  secondary: j.identifier(`${tokensImportName}.gray900`),
  muted: j.identifier(`${tokensImportName}.gray600`),
  white: j.identifier(`${tokensImportName}.colorWhite`),
  premium: j.identifier(`${tokensImportName}.purple500`),
});

const replaceTrimmedIcons = function (file, api) {
  const j = api.jscodeshift;

  let source = file.source;

  const importName = getImport('f36-icons');

  const components = Object.keys(iconsMap)
    .map((v4IconName) => {
      return {
        localName: getComponentLocalName(j, source, {
          componentName: `${v4IconName}TrimmedIcon`,
          importName,
        }),
        v4IconName,
      };
    })
    .filter(({ localName }) => !!localName);

  components.forEach(({ localName, v4IconName }) => {
    const newComponentName = `${v4IconName}Icon`;
    source = changeComponentName(j, source, {
      componentName: localName,
      outputComponentName: newComponentName,
    });

    if (!shouldSkipUpdateImport()) {
      source = changeImport(j, source, {
        componentName: localName,
        from: importName,
        to: '@contentful/f36-icons',
        outputComponentName: newComponentName,
      });
    }

    source = changeIdentifier(j, source, {
      from: localName,
      to: newComponentName,
    });
  });

  return source;
};

const updateToV5Icons = function (file, api) {
  const j = api.jscodeshift;

  let source = file.source;

  const importName = getImport('f36-icons');
  const tokensImportName = getImport('f36-tokens');

  const components = Object.keys(iconsMap)
    .map((v4IconName) => {
      return {
        localName: getComponentLocalName(j, source, {
          componentName: `${v4IconName}Icon`,
          importName,
        }),
        v4IconName,
      };
    })
    .filter(({ localName }) => !!localName);

  let addTokensImport = false;

  components.forEach(({ localName, v4IconName }) => {
    const newComponentName = `${iconsMap[v4IconName]}Icon`;

    source = changeProperties(j, source, {
      componentName: localName,
      fn(attributes) {
        let modifiedAttributes = attributes;

        // Replace variant with color prop
        if (hasProperty(modifiedAttributes, { propertyName: 'variant' })) {
          const variant = getProperty(modifiedAttributes, {
            propertyName: 'variant',
          });

          const { result } = addImport(j, source, [
            j.template.statement([`import tokens from "${tokensImportName}"`]),
          ]);
          addTokensImport = true;

          if (isConditionalExpression(variant.value, j)) {
            modifiedAttributes = updatePropertyValue(modifiedAttributes, {
              j,
              propertyName: 'variant',
              propertyValue: (value) => {
                const valueMap = variantToColorTokenMap(j, result.tokens);

                const updatedValue = updateTernaryValues(value, {
                  j,
                  valueMap,
                });

                return updatedValue;
              },
            });
          } else {
            modifiedAttributes = updatePropertyValue(modifiedAttributes, {
              j,
              propertyName: 'variant',
              propertyValue: (value) => {
                if (value.type === 'JSXExpressionContainer') {
                  const expressionValue = value.expression.value;
                  if (
                    expressionValue in variantToColorTokenMap(j, result.tokens)
                  ) {
                    return j.jsxExpressionContainer(
                      variantToColorTokenMap(j, result.tokens)[expressionValue],
                    );
                  }
                  return value;
                } else {
                  if (value.value in variantToColorTokenMap(j, result.tokens)) {
                    return j.jsxExpressionContainer(
                      variantToColorTokenMap(j, result.tokens)[value.value],
                    );
                  }
                }
              },
            });
          }

          modifiedAttributes = renameProperties(modifiedAttributes, {
            renameMap: {
              variant: 'color',
            },
          });
        }

        // Update size prop
        if (hasProperty(modifiedAttributes, { propertyName: 'size' })) {
          let size = getProperty(modifiedAttributes, {
            propertyName: 'size',
          });

          // update conditional expressions
          if (isConditionalExpression(size.value, j)) {
            modifiedAttributes = updatePropertyValue(modifiedAttributes, {
              j,
              propertyName: 'size',
              propertyValue: (value) => {
                const valueMap = {
                  large: 'medium',
                  xlarge: 'medium',
                };

                const updatedValue = updateTernaryValues(value, {
                  j,
                  valueMap,
                });

                return updatedValue;
              },
            });
          }

          // update JSXExpressionContainer
          if (size.value.type === 'JSXExpressionContainer') {
            modifiedAttributes = updatePropertyValue(modifiedAttributes, {
              j,
              propertyName: 'size',
              propertyValue: () => {
                return j.literal(size.value.expression.value);
              },
            });
          }

          size = getProperty(modifiedAttributes, {
            propertyName: 'size',
          });

          // Remove size prop if value is 'large', 'xlarge' or 'medium'
          if (['large', 'xlarge', 'medium'].includes(size.value.value)) {
            modifiedAttributes = deleteProperty(modifiedAttributes, {
              propertyName: 'size',
              file,
            });
          }
        }

        return modifiedAttributes;
      },
    });

    source = changeComponentName(j, source, {
      componentName: localName,
      outputComponentName: newComponentName,
    });

    if (!shouldSkipUpdateImport()) {
      source = changeImport(j, source, {
        componentName: localName,
        from: importName,
        to: '@contentful/f36-icons-alpha',
        outputComponentName: newComponentName,
      });
    }

    source = changeIdentifier(j, source, {
      from: localName,
      to: newComponentName,
    });
  });

  const iconPropsLocalname = getComponentLocalName(j, source, {
    componentName: 'IconProps',
    importName,
  });
  if (addTokensImport) {
    source = addImport(j, source, [
      j.template.statement([`import tokens from "${tokensImportName}"`]),
    ]).source;
  }
  if (iconPropsLocalname) {
    source = changeImport(j, source, {
      componentName: iconPropsLocalname,
      from: importName,
      to: '@contentful/f36-icons-alpha',
      outputComponentName: iconPropsLocalname,
    });
  }

  return source;
};

module.exports = pipe([replaceTrimmedIcons, updateToV5Icons]);
