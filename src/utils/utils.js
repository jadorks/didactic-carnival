export function isNonZeroNumber(_input) {
  return _input !== undefined && _input !== "" && parseFloat(_input) !== 0.0;
}

export function onInputNumberChange(e, f) {
  const re = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;
  if (e.target.value === "" || re.test(e.target.value)) {
    f(e.target.value);
  }
}

function treatAsUTC(date) {
  var result = new Date(Number(date));
  result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
  return result.getTime();
}

export function timestampToNumberOfDay(timestamp) {
  const millisecondePerDay = 24 * 60 * 60 * 1000;
  let now = treatAsUTC(Date.now());
  let future = treatAsUTC(Number(timestamp));

  const dys = Math.ceil((future - now) / millisecondePerDay);
  return dys > 0 ? dys : 0;
}

export function formatSecond(sec) {
  const second = Number(sec);
  const days = Math.floor(second / 86400);
  const hours = Math.floor((second % 86400) / 3600);
  const minutes = Math.floor(((second % 86400) % 3600) / 60);
  const seconds = Math.floor(((second % 86400) % 3600) % 60);
  const forMatDate = {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    string: `${formatDay(days).string}, ${hours} hour${
      hours === 1 ? "" : "s"
    }, ${minutes} minute${hours === 1 ? "" : "s"}, ${seconds} second${
      hours === 1 ? "" : "s"
    }`,
  };
  return forMatDate;
}

export function formatDay(day) {
  const days = Number(day);
  const forMatDay = {
    days: days,
    string: `${days} day${days === 1 ? "" : "s"}`,
  };
  return forMatDay;
}

export function numberOfDaysTimeStamp(days) {
  const millisecondePerDay = 24 * 60 * 60 * 1000;
  const daysTimestamp = Number(days) * millisecondePerDay;
  const finalDate = treatAsUTC(Date.now()) + treatAsUTC(daysTimestamp);
  return new Date(finalDate).getTime();
}

export function numberOfDaysToDateString(days) {
  const timestamp = numberOfDaysTimeStamp(days);
  const date = new Date(timestamp);
  const month = date.toLocaleString("default", {
    month: "long",
  });
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}

export function getPercentage(value, total) {
  return ((Number(value) / Number(total)) * 100).toFixed(1);
}

export const percentageFormatter = new Intl.NumberFormat("en-US", {
  style: "percent",
  maximumFractionDigits: 2,
});
export const usdFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  // notation: "compact",
});

export const genFormatter = new Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 2,
});

export const genFormatter3dec = new Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 3,
});

export const standardNumberFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2,
  notation: "standard",
});

export const standardNumberFmtWCompact = (value) => {
  const val = Number(value);
  if (val > 999999999) {
    return genFormatter.format(val);
  } else {
    return standardNumberFormatter.format(val);
  }
};

export const genFormatterHandleSmall = (value) => {
  if (Number.parseFloat(value) > 0.004) {
    return genFormatter3dec.format(value);
  } else {
    return Number.parseFloat(value).toExponential(2);
  }
};

export const genFormatterCompactAboveThousand = (value) => {
  if (Number(value) > 9999) {
    return genFormatter3dec.format(value);
  } else {
    return standardNumberFormatter.format(value);
  }
};

export const getUSDValue = (ethInLp, ethPrice) => {
  const supply = ethInLp * 2;
  return supply * ethPrice;
};


