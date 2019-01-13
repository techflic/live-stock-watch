export const formatTimeStamp = timeStamp => {
    const dt = new Date(timeStamp);
    return (
        dt.getFullYear() +
        "-" +
        (dt.getMonth() + 1) +
        "-" +
        dt.getDate() +
        " " +
        dt.getHours() +
        ":" +
        dt.getMinutes() +
        ":" +
        dt.getSeconds()
    );
};

export const indicatorOf = price => {
    if (price.length === 1) return "none";
    else if (price.length > 1)
        return price[price.length - 1] > price[price.length - 2]
            ? "green"
            : "red";
};
