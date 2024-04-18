const {
  getComponentLocalName,
  changeComponentName,
  changeImport,
} = require('../../utils');
const { shouldSkipUpdateImport, getImport } = require('../../utils/config');

// V4 icon name : V5 icon name
const iconsMap = {
  ArrowBackward: 'ArrowLeft',
  ArrowDown: 'CaretDownFill',
  ArrowDownward: 'ArrowDown',
  ArrowForward: 'ArrowRight',
  ArrowUp: 'CaretUpFill',
  ArrowUpward: 'ArrowUp',
  Audio: 'FileAudio',
  Calendar: 'CalendarBlank',
  ChatBubble: 'ChatFill',
  CheckCircle: 'CheckCircleFill',
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
  DoubleArrow: 'CaretUpDownFill',
  Download: 'DownloadSimple',
  Drag: 'DotsSixVertical',
  Edit: 'PencilSimple',
  EmbeddedEntryBlock: 'EmbeddedBlock',
  EmbeddedEntryInline: 'EmbeddedLine',
  Entry: 'Entry',
  Environment: 'Environment',
  EnvironmentAlias: 'EnvironmentAlias',
  ErrorCircle: 'WarningOctagonFill',
  ErrorCircleOutline: 'WarningOctagon',
  ExternalLink: 'ArrowSquareOut',
  FaceHappy: 'Smiley',
  Filter: 'FunnelSimple',
  FolderCreate: 'FolderSimplePlus',
  FolderOpen: 'FolderOpen',
  FormatBold: 'TextBold',
  FormatItalic: 'TextItalic',
  FormatUnderlined: 'TextUnderline',
  Heading: 'TextH',
  HeadingOne: 'TextHOne',
  HeadingTwo: 'TextHTwo',
  HorizontalRule: 'Minus',
  Image: 'ImageSquare',
  InfoCircle: 'InfoFill',
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
  PlusCircle: 'PlusCircleFill',
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
  Settings: 'GearSixFill',
  ShoppingCart: 'ShoppingCartSimpleFill',
  Sort: 'CaretUpDownFill',
  SortAscending: 'SortAscending',
  SortDescending: 'SortDescending',
  Spreadsheet: 'Table',
  Star: 'StarFill',
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
  Warning: 'WarningFill',
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
