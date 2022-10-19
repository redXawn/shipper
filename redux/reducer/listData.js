const initialState = {
  listData: [],
  filterData: [],
  showData: [],
  totalData: 0,
  totalPage: 0,
  currentPage: 1,
};
const listDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_INITIAL_DATA':
      const initialShowData = action.payload.slice(0, 5);
      const initialTotalData = action.payload.length;
      const initialTotalPage = Math.ceil(initialTotalData / 5);
      return {
        ...state,
        listData: action.payload,
        showData: initialShowData,
        totalData: initialTotalData,
        totalPage: initialTotalPage,
      };
    case 'CHANGE_PAGE':
      const newCurrentPage = action.payload === 'next' ? state.currentPage + 1 : state.currentPage - 1;
      const startIndex = newCurrentPage * 5 - 5;
      const newShowData = (state.filterData.length > 0 ? state.filterData : state.listData).slice(
        startIndex,
        startIndex + 5
      );
      return {
        ...state,
        showData: newShowData,
        currentPage: newCurrentPage,
      };
    case 'FIND_USER':
      let filterData, showFilterData, filterTotalData, filterTotalPage, filterCurrentPage;
      if (action.payload) {
        filterData = state.listData.filter(
          (data) => JSON.stringify(data.name.first).toLowerCase().indexOf(action.payload.toLowerCase()) !== -1
        );
        showFilterData = filterData.slice(0, 5);
        filterTotalData = filterData.length;
      } else {
        filterData = [];
        showFilterData = state.listData.slice(0, 5);
        filterTotalData = state.listData.length;
      }

      filterTotalPage = Math.ceil(filterTotalData / 5);
      filterCurrentPage = 1;
      return {
        ...state,
        filterData: filterData,
        showData: showFilterData,
        totalData: filterTotalData,
        totalPage: filterTotalPage,
        currentPage: filterCurrentPage,
      };
    default:
      return state;
  }
};

export default listDataReducer;
