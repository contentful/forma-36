const mapping = {
  colorBlueLightest: 'blue100',
  colorBlueLight: 'blue300',
  colorBlueMid: 'blue500',
  colorBlueBase: 'blue600',
  colorBlueDark: 'blue700',
  colorContrastDark: 'colorBlack',
  colorContrastMid: 'gray900',
  colorContrastLight: 'gray800',
  colorCoralDark: 'red200',
  colorCoralMid: 'red100',
  colorElementDarkest: 'gray500',
  colorElementDark: 'gray400',
  colorElementMid: 'gray300',
  colorElementLight: 'gray200',
  colorElementLightest: 'gray100',
  colorGreenDark: 'green700',
  colorGreenBase: 'green600',
  colorGreenMid: 'green500',
  colorGreenLight: 'green300',
  colorGreenLightest: 'green100',
  colorIceDark: 'blue200',
  colorIceMid: 'blue100',
  colorMintDark: 'green200',
  colorMintMid: 'green100',
  colorOrangeDark: 'orange600',
  colorOrangeBase: 'orange500',
  colorOrangeMid: 'orange400',
  colorOrangeLight: 'orange200',
  colorOrangeLightest: 'orange100',
  colorPeachDark: 'orange200',
  colorPeachMid: 'orange100',
  colorPurpleDark: 'purple700',
  colorPurpleBase: 'purple600',
  colorPurpleMid: 'purple500',
  colorPurpleLight: 'purple300',
  colorPurpleLightest: 'purple100',
  colorRedDark: 'red700',
  colorRedBase: 'red600',
  colorRedMid: 'red500',
  colorRedLight: 'red300',
  colorRedLightest: 'red100',
  colorTextDark: 'gray900',
  colorTextBase: 'gray800',
  colorTextMid: 'gray700',
  colorTextLight: 'gray600',
  colorTextLightest: 'gray500',
  colorYellowDark: 'yellow800',
  colorYellowBase: 'yellow600',
  colorYellowMid: 'yellow500',
  colorYellowLight: 'yellow400',
  colorYellowLightest: 'yellow200',
};

const allReplaceable = Object.keys(mapping);

const getLocalImportName = (j, file) => {
  let localImportName = '';

  j(file.source)
    .find(j.ImportDeclaration, {
      source: { value: '@contentful/forma-36-tokens' },
      specifiers: { 0: { type: 'ImportDefaultSpecifier' } },
    })
    .forEach((path) => {
      localImportName = path.value.specifiers[0].local.name;
    });

  return localImportName;
};

const getLocalRequireName = (j, file) => {
  let localRequireName = '';

  j(file.source)
    .find(j.CallExpression, {
      callee: { name: 'require' },
      arguments: { 0: { value: '@contentful/forma-36-tokens' } },
    })
    .forEach((path) => {
      localRequireName = path.parent.value.id.name;
    });

  return localRequireName;
};

module.exports = function (file, api) {
  const j = api.jscodeshift;

  let localModuleName = getLocalImportName(j, file);
  localModuleName = localModuleName || getLocalRequireName(j, file);

  if (!localModuleName) {
    return j(file.source).toSource();
  }

  return j(file.source)
    .find(j.Identifier)
    .filter(
      (path) =>
        allReplaceable.includes(path.value.name) &&
        path.parent.node.object &&
        path.parent.node.object.name === localModuleName,
    )
    .forEach((path) => {
      j(path).replaceWith(j.identifier(mapping[path.node.name]));
    })
    .toSource();
};
