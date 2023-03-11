// export const UserRole = {
//     Admin: 'Admin',
//     User: 'User',
//     Admins: 'Admins',
//     Users: 'Users',
//   };

/* 
  Menu Types:
  "menu-default", "menu-sub-hidden", "menu-hidden"
  */

export const currentUser = {
  uuid: 'XgbuVEXBU5gtSKdbQRP1Zbbby1i1',
  from: 'custom-db',
  password: '',
  role: '',
  data: {
    displayName: '',
    photoURL: 'assets/images/avatars/Abbott.jpg',
    email: 'admin@fusetheme.com',
    settings: {
      layout: {
        style: 'layout1',
        config: {
          scroll: 'content',
          navbar: {
            display: true,
            folded: true,
            position: 'left',
          },
          toolbar: {
            display: true,
            style: 'fixed',
            position: 'below',
          },
          footer: {
            display: true,
            style: 'fixed',
            position: 'below',
          },
          mode: 'fullwidth',
        },
      },
      customScrollbars: true,
      theme: {
        main: 'greeny',
        navbar: 'mainThemeDark',
        toolbar: 'mainThemeDark',
        footer: 'mainThemeDark',
      },
    },
    shortcuts: ['calendar', 'mail', 'contacts'],
  },
};
//   export const currentUser = {
//     id: 1,
//     userName:'',
//     title: '',
//     img: '/assets/img/profiles/l-1.jpg',
//     date: '',
//     role:[],
//     claims:[]
//   };
export const fiscalPeriod = {
  fiscalPeriodId: 0,
  title: '',
  startDate: '',
  endDate: '',
  State: 1,
};
export const currentToken = {
  accessToken: '',
  refreshToken: '',
};

export const apiUrlBase = 'http://soltaniwoodproducts.ir';
// export const apiUrlBase = 'https://localhost:5001';
export const apiUrlLogin = '/api/Account/Login';
export const apiUrlRegisterUser = '/api/RegisterUser/AddUser';
export const apiUrlGetRoleItems = '/api/RolesManager/GetRoleItems';
export const apiUrlChangeUserLockoutMode = '/api/UsersManager/ChangeUserLockoutMode';
export const apiUrlChangeTwoFactorAuthentication =
  '/api/UsersManager/ChangeUserTwoFactorAuthenticationStat';
export const apiUrlChangeActiveUser = '/api/UsersManager/ChangeUserStat';
export const apiUrlUsersListWithFullNameAndId = '/api/UsersManager/GetUsersListWithFullNameAndId';
export const apiUrlGetBranch = '/api/Branch/GetBranches';
export const apiUrlDeleteRole = '/api/RolesManager/DeleteRole';
export const apiUrlUpdateUserProfile = '/api/UserProfile/UpdateUserProfile';
export const apiUrlChangePassword = '/api/ChangePassword/ChangePass';
export const apiURLChangeUserRole = '/api/UsersManager/ChangeUserRoles';
export const apiUrlDynamicRoleClaimsManager = '/api/DynamicRoleClaimsManager/AddDynamicRoleClaims';
export const apiUrlUpdateUserAddress = '/api/UserProfile/UpdateUserAddress';
export const apiUrlDeleteUserAddress = '/api/UserProfile/DeleteUserAddressAdmin';
export const apiUrlAddUserAddress = '/api/UserProfile/AddUserAddress';
export const apiUrlAddUserInformation = '/api/UserProfile/AddUserInformation';
export const apiUrlUpdateUserInformation = '/api/UserProfile/UpdateUserInformation';
export const apiUrlDeleteUserInformationAdmin = '/api/UserProfile/DeleteUserInformationAdmin';
export const apiUrlGetFiscalPeriod = '/api/FiscalPeriod/FiscalPeriodAdd';
export const apiUrlAddProduct = '/api/Product/ProductAdd';
export const apiUrlGetProductGroup = '/api/ProductGroup/GetProductGroupList';
export const apiUrlGetProductGroupJustChildList =
  '/api/ProductGroup/GetAllProductGroupJustChildList';
export const apiUrlAddProductGroup = '/api/ProductGroup/ProductGroupAdd';
export const apiUrlDeleteProductGroup = '/api/ProductGroup/ProductGroupDelete';
export const apiUrlUpdateProductGroup = '/api/ProductGroup/ProductGroupUpdate';
export const apiUrlGetUnitList = '/api/Unit/GetUnitList';
export const apiUrlGetUnit = '/api/Unit/GetUnit?unitId';
export const apiUrlAddUnit = '/api/Unit/UnitAdd';
export const apiUrlDeleteUnit = '/api/Unit/UnitDelete';
export const apiUrlGetProductGroupSubGroupList = '/api/ProductGroup/GetProductGroupSubGroupList';
export const apiUrlChangeUserPassword = '/api/ChangePassword/ChangeUserPassword';
export const apiUrlGetProductList = '/api/Product/GetProductList';
export const apiUrlGetProductGroupList = '/api/ProductGroup/GetProductGroupList';
export const apiUrlProductDelete = '/api/Product/ProductDelete';
export const apiUrlProductUpdate = '/api/Product/ProductUpdate';
export const apiUrlGetAllProductGroupJustChildList = '/api/ProductGroup/GetAllProductGroupJustChildList';
/* PARTY URL API */
export const apiUrlGetPartyGroupSubGroupList = '/api/PartyGroup/GetPartyGroupSubGroupList';
export const apiUrlAddParty = '/api/Party/PartyAdd';
export const apiGetPartyGroupJustChildList = '/api/PartyGroup/GetAllPartyGroupJustChildList';
export const apiUrlGetPartyList = '/api/Party/GetPartyList';
export const apiUrlGetParty = '/api/Party/GetParty';
export const apiUrlGetPartyListForFactor = '/api/Party/GetPartyListForFactor';
export const apiUrlPartyDelete = '/api/Party/PartyDelete';
export const apiUrlUpdateParty = '/api/Party/PartyUpdate';
export const apiUrlGetPartyGroup = '/api/PartyGroup/GetPartyGroup';
export const apiUrlDeletePartyGroup = '/api/PartyGroup/PartyGroupDelete';
export const apiUrlAddPartyGroup = '/api/PartyGroup/PartyGroupAdd';
export const apiUrlUpdatePartyGroup = '/api/PartyGroup/PartyGroupUpdate';
export const apiUrlGetPartyGroupList = '/api/PartyGroup/GetPartyGroupList'
/* Bank URL API */
export const apiUrlGetBankList = '/api/Bank/GetBankList';
export const apiUrlGetBank = '/api/Bank/GetBank?';
export const apiUrlAddBank = '/api/Bank/BankAdd';
export const apiUrlUpdateBank = '/api/Bank/BankUpdate';
export const apiUrlDeleteBank = '/api/Bank/BankDelete';
/* Bank Account Url API */
export const apiUrlGetBankAccountList = '/api/BankAccount/GetBankAccountList';
export const apiUrlGetBankAccount = '/api/BankAccount/GetBankAccount';
export const apiUrlAddBankAccount = '/api/BankAccount/BankAccountAdd';
export const apiUrlUpdateBankAccount = '/api/BankAccount/BankAccountUpdate';
export const apiUrlDeleteBankAccount = '/api/BankAccount/BankAccountDelete';
/* Location Url API */
export const apiUrlGetCityList = '/api/Location/GetCityList';
export const apiUrlGetProvinceList = '/api/Location/GetProvinceList';
export const apiUrlGetCity = '/api/Location/GetCities';
/* Stock URL API */
export const apiUrlGetStockList = '/api/Stock/GetStockList';
export const apiUrlGetStock = '/api/Stock/GetStock?';
export const apiUrlAddStock = '/api/Stock/StockAdd';
export const apiUrlUpdateStock = '/api/Stock/StockUpdate';
export const apiUrlDeleteStock = '/api/Stock/StockDelete';
/* Cash URL API */
export const apiUrlGetCashList = '/api/Cash/GetCashList';
export const apiUrlGetCash = '/api/Cash/GetCash?';
export const apiUrlAddCash = '/api/Cash/CashAdd';
export const apiUrlUpdateCash = '/api/Cash/CashUpdate';
export const apiUrlDeleteCash = '/api/Cash/CashDelete';
export const apiUrlChangeStatus = '/api/Cash/ChangeStatus';
/* SalesInvoice URL API */
export const apiUrlSaleInvoice = '/api/SaleInvoices';


// export const instance =axios.create({
//   baseURL: apiUrlBase,
//   headers: {
//     Authorization: `Bearer ${getCurrentToken().accessToken}`,
//     "content-type": "application/json",
//   },
// });
