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
  FormatBold: 'TextBold',
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
  Link: 'LinkSimpleHorizontal',
  LinkAlternate: 'LinkSimpleHorizontal',
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
  PlusCircle: 'PlusCircle',
  Presentation: 'Presentation',
  Preview: 'Eye',
  PreviewOff: 'EyeSlash',
  Puzzle: 'PuzzlePiece',
  Quote: 'Quotes',
  Receipt: 'Receipt',
  References: 'References',
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

module.exports = function (file, api) {
  const j = api.jscodeshift;

  let source = file.source;

  const importName = getImport('f36-icons');

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

  components.forEach(({ localName, v4IconName }) => {
    const newComponentName = `${iconsMap[v4IconName]}Icon`;

    source = changeProperties(j, source, {
      componentName: localName,
      fn(attributes) {
        let modifiedAttributes = attributes;

        // Remove variant prop
        modifiedAttributes = deleteProperty(modifiedAttributes, {
          propertyName: 'variant',
          file,
        });

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

          size = getProperty(modifiedAttributes, {
            propertyName: 'size',
          });

          // If ternary has same value for true and false, simplify
          if (size.value.value === undefined) {
            const matches = size.value.match(/\{'(\w+?)'\}/);
            if (matches[1]) {
              modifiedAttributes = updatePropertyValue(modifiedAttributes, {
                j,
                propertyName: 'size',
                propertyValue: () => {
                  return j.literal(matches[1]);
                },
              });
            }
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
  });

  return source;
};