export const getData = async () => {
    const response = await fetch('https://storage.googleapis.com/aller-structure-task/test_data.json');
    const res = await response.json();
    return res;
};
