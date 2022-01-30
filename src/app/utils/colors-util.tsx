/*

    colors util for react components. to use
    import { colors } from '.../utils/colors_utils'

    Example 1:
    **CSS**
    {
      backgroundColor: colors.dark_bg
      color: colors.sc_gold_1
    }

    Example 2:
    const { dark_bg, sc_gold_1 } = colors;
    **CSS**
    {
      backgroundColor: dark_bg,
      color: sc_gold_1
    }

*/

export const colors = {
  themePrimary:'#429539',
  scGold1: '#feb810',
  scGold2: '#ff9d00',
  black: '#000000',
  white: '#ffffff',

  macOsColor: '#7a6fa9',
  winOsColor: '#1b9ea4',
  linuxOsColor: '#f78c21',
  winOtColor: '#a01c95',
  linuxOtColor: '#ff7cff',
  defaultOsColor: '#1b9ea4',

  armorDark3: '#003866',
  armorDark2: '#00559b',
  armorDark1: '#005fae',
  armor: '#0071ce',
  armorLight1: '#338dd8',
  armorLight2: '#8cbfe9',
  armorLight3: '#d9eaf8',

  // use 'black' for neutralDark6
  neutralDark6: '#000',
  neutralDark5: '#051c2c',
  neutralDark4: '#212f3c',
  neutralDark3: '#384654',
  neutralDark2: '#4e5d6c',
  neutralDark1: '#6a7885',

  lightRandom: '#869493',

  neutralLight1: '#86949e',
  neutralLight2: '#a8b2ba',
  neutralLight3: '#ccd2d6',
  neutralLight4: '#eff2f4',
  neutralLight5: '#fafbfc',
  // use 'white' for below
  neutralLight6: '#fff',

  successDark3: '#0b4222',
  successDark2: '#0f5b2f',
  successDark1: '#13743c',
  success: '#1ca757',
  successLight1: '#5fc189',
  successLight2: '#bae4cc',
  successLight3: '#ddf2e6',

  dangerDark3: '#631717',
  dangerDark2: '#881f1f',
  dangerDark1: '#ad2828',
  danger: '#fa3a3a',
  dangerLight1: '#fb7474',
  dangerLight2: '#fec3c3',
  dangerLight3: '#ffe1e1',

  warningDark3: '#65331a',
  warningDark2: '#8b4624',
  warningDark1: '#b1592d',
  warning : '#ff8142',
  warningLight1: '#ffa67a',
  warningLight2: '#ffd9c6',
  warningLight3: '#ffece3',

  infoDark3: '#00404b',
  infoDark2: '#005867',
  infoDark1: '#006f84',
  info: '#00a1be',
  infoLight1: '#4cbdd1',
  infoLight2: '#b1e2eb',
  infoLight3: '#d9f1f5',

  severity1: '#86949e',
  severity2: '#feb810',
  severity3: '#ff8142',
  severity4: '#b1592d',
  severity5: '#fc1c53',

  // random colors found throughout, should be updated to existing design palette colors!
  dropdownBg: '#2e3b4d',
  dropdownIndicator: '#febe10',
  tabBackground: '#17212E',

  activityChart1: '#008E72',
  activityChart2: '#008198',
  activityChart3: '#773dbd',

  buttonSecondary: '#0377d3',
  buttonDisabled: '#88A8C4',
  copyStyleBg: '#465b73',
  copyHoverBg: '#9da1a7',

  notifySuccess: '#00961d',
  notifyError: '#e85742',
  notifyWarning: '#f5e273',
  notifyWarningText: '#333333',
  notifyInfo: '#4990e2',

  chartLegends: '#babec2',
  highchartTooltipBg: '#293545',
  tableBackground: '#324053',
  deviceGroupBoxBorder: '#34445f',
  policyDetailsColor: '#95989a',
  preventionDetectionBorder: '#3b454d',
  securityPolicyDetailWhitelistedFolder: '#fbbc10',
  whitelistCellBg: '#586271',
  tabBorderTop: '#627388',
  deviceCardBg: '#142938',
  deviceDetailBg: '#0E1720',
  threatDetailText: '#c4c4c4',
  accordionBg:'#131c27',
  tableRowBg: '#293545',
  peImportCell: '#212b35',
  occurrencesInfoBg:'#1e2835',
  inputBorder: '#d4d5d6',
  disableButton: '#465b73',
  successButton: '#01AD7A',

  formInputButton: '#b4babf',
  readOnlyModal: '#686f77',
  inputBackground: '#122837',

  switchDiv: '#babdc1',
  checkedSwitchDiv: '#0078d7',
  switchRedUncheck: 'f84752',

  switchCheckDiv: '#676f78',

  rdtPickerToggleHover: '#eeeeee',
  rdtPickerNew: '#999999',
  rdtBorder: '#428bca',
  rdtPickerHeader: '$f9f9f9',
  rdtPicker: '#0b1219',
  rdtInput: '#3e5168',
  rdtPlaceholder: '#7d7d7d',
  rdtBorderBottom: '#cccccc',
  dateTimeValuesColor: '#5D7C9C',

  successBorder: '#019468',
  activeThreatColor: '#898c91',
  activeThreatAnalysisColor: '#8f959D',

  processTreeBg: '#444',
  processTreeFill: '#f4f4f4',
  processTreeHoverStroke: '#707070',

  deviceGroupDropdown: '#4f606f',

  popoverText: '#1f1f1f',
  popoverPText: '#808080',

  emailsBackground: '#f8f8f8',
  chipInput: '#565656',
  tomato: '#ff6347',
  cornflowerBlue: 'cornflowerblue',
  selectedFilterBg: '#00BE84',
  dropdownListBackground: '#efefef',
  select2DropdownScroll: '#525C6B',
  filePicker: '#858585',
  ringLoader: '#007be0',
  pageControlButtonColor: '#506884',
  pageControlBg: '#121922',
  ellipsisPageButton: '#0B121A',
  userDetailBackground: '#22303f',
  apiKeyBoxColor: '#1a2b3e',
  detailTitleColor: '#131922',
  scoreBarBackground: '#4782F2',
  scoreBarBgAlt: '#4E4E4E',
  sidebarBorder: '#68717C',
  actionDropdownFocus: '#344b67',
  threatLevelBg: '#d12851',
  selectionItemBg: '#080D13',
  alertCategoryCellColor: '#5a636e',
  addNoteCellColor: '#878d94',
  editBgColor: '#263240',
  userLinkColor: '#337AB7',
  scriptContentColor: '#767676',
  crossIconColor: '#505050',
  resourceLinkColor: '#4a88ff',
  dropdownIndicatorColor: '#efb439',
  licenseCount: '#d7dbdf',
  deviceBtn: '#2b3848',
  pointerHolderBg: '#384259',
  linkPage: '#949aa2',
  devicePageIconBg: '#293645',
  widgetListDescription: '#FF9300',
  downloadVersion: '#9D9D9D',
  downloadPackageColor: '#626973',
  deviceEditErrorMsg: '#FF0000',
  editSelectedGroupColor: '#dd6060',
  activityLogBg: '#334255',
  agentDetailBoxHeader: '#102433',
  settingWrapH4: '#95989a',
  deviceInfoBg: '#222e3d',
  statusUsbAllow: '#30D000',
  statusUsbDeny: '#FA3A3D',
  uploadLinkColor: '#fdbd10',
  searchBarBg: '#515963',
  emailSentPage: '#7C8289',
  installLinkColor: '#8F949A',
  reportsButton: '#01AD7A',
  basicCellBg: '#1c3a5f',
  basicCellEdit: '#1e456c',
  advancedCellBg: '#1e456c',
  customSelectColor: '#4C8BFC',
  customSelectIcon: '#516a77',
  customSelectIconHover: '#95B7FD',

  /* rgb and rgba colors */
  activityChartLegend1: 'rgba(0, 142, 114, 0.7)',
  activityChartLegend2: 'rgba(0, 129, 152, 0.7)',
  activityChartLegend3: 'rgba(119, 61, 189, 0.75)',
  darkShadow: 'rgba(0,0,0,.1)',
  lightBorder: 'rgba(255, 255, 255, 0.4)',
  rdtShadow: 'rgba(0, 0, 0, 0.2)',
  weakFill: 'rgb(255, 3, 71)',
  okayFill: 'rgb(209, 139, 47)',
  goodFill: 'rgb(212, 198, 0)',
  strongFill: 'rgb(87, 184, 255)',
  strongestFill: 'rgb(0, 128, 0)',
  drawerColor: 'rgba(0, 0, 0, 0.75)',
  transparent: 'rgba(0, 0, 0, 0)',
  darkMidTransparent: 'rgba(0, 0, 0, 0.3)',
  nearTransparent: 'rgba(0, 0, 0, 0.16)',
  extraDarkTransparent: 'rgba(0, 0, 0, 0.06)',
  greyTransparent: 'rgba(112, 112, 112, 0.2)',
  greyBorderTransparent: 'rgba(112, 112, 112, 0.35)',
  greyExtraLight: 'rgba(112, 112, 112, 0.1)',
  whiteTransparent: 'rgba(255, 255, 255, 0.15)',
  whiteMidTransparent: 'rgba(255, 255, 255, 0.3)',
  whiteHalfTransparent: 'rgba(255, 255, 255, 0.5)',
  scrollbarsCustomThumb: 'rgba(167, 171, 176, 0.6)',
  selectCssShadow: 'rgba(62, 81, 104, 0.6)',
  apiKeyBoxBg: 'rgba(200, 200, 200, 0.3)',
  userLinkDrawerBorder: 'rgba(149, 152, 154, 0.27)',
  deviceCardColor: 'rgba(239, 242, 244, 0.7)',
  searchBarShadow: 'rgba(62, 81, 104, 0.6)',
};
