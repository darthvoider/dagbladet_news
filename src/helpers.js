export const excludeOnlyArticles = news => {
    return news
        .map(row => row.columns)
        .reduce((newArr, item) => {
            item.forEach(i => newArr.push(i));
            return newArr;
        },[]);
};
