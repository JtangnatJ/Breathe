const calculateTimeSinceMidnight = () => {
    let now = new Date();
    let then = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        0,0,0
    );
    return (now.getTime() - then.getTime())/1000;
};

console.log(calculateTimeSinceMidnight());