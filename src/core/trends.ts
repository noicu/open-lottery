export const getExtraColor = (it: any) => {
  if (['和', '豹', '蓝'].includes(it)) {
    return '#0CA0EC'
  }
  if (['单', '小', '虎', '半'].includes(it)) {
    return '#AABB92'
  }
  if (['绿'].includes(it)) {
    return '#00E580'
  }
  if (['红'].includes(it)) {
    return '#ed3737'
  }
  if (['大', '双', '龙', '对'].includes(it)) {
    return '#00BCBD'
  }
  if (typeof it === 'number') {
    return '#E59300'
  }
  if (['顺', '黄'].includes(it)) {
    return '#E59500'
  }
  if (it === '杂') {
    return '#E6008A'
  }
  return '#636363'
}

const isBs = (s: number) => {
  switch (true) {
    case [3, 6, 9, 12, 15, 18, 21, 24].indexOf(s) !== -1:
      return '红';
    case [1, 4, 7, 10, 16, 19, 22, 25].indexOf(s) !== -1:
      return '绿';
    case [2, 5, 8, 11, 17, 20, 23, 26].indexOf(s) !== -1:
      return '蓝';
    case [0, 13, 14, 27].indexOf(s) !== -1:
      return '黄';
  }
};
const isLh = (a: any) => {
  const obj: any = {};
  for (let i = 0; i < 5; i++) {
    obj[i + 1] = a[i] > a[9 - i] ? '龙' : '虎';
  }
  return obj;
};

const isQzh = (arr: any) => {
  const obj: any = {};
  arr.forEach(function (v: any, k: any) {
    if (obj[v]) {
      obj[v]++;
    } else {
      obj[v] = 1;
    }
  });
  let n = 0;
  const soa = arr.sort((a: any, b: any) => {
    return a - b;
  });
  for (let j = 1; j <= soa.length - 1; j++) {
    if (soa[j - 1] - soa[j] === -1) {
      n++;
    }
  }
  if (soa.indexOf(0) !== -1 && soa.indexOf(9) !== -1) {
    n++;
  }
  switch (true) {
    case Object.keys(obj).length === 1:
      return '豹';
    case n === 2:
      return '顺';
    case Object.keys(obj).length === 2:
      return '对';
    case n === 1:
      return '半';
    default:
      return '杂';
  }
};
// {
//   1:'ssc',
//   2:'pk',
//   3:'ks',
//   4:'pc',
// }
export const isAnalyzingTrends = (data: any, type: any) =>
  data.map((it: any) => {
    const arr = it as Array<number> || [];
    let sum = 0;
    switch (type) {
      case 4:
        sum = arr.reduce((p: any, c: any) => Number(p) + Number(c));
        return {
          ...it,
          sum,
          openArr: arr,
          dx: sum <= 13 ? '小' : '大',
          ds: sum % 2 === 0 ? '双' : '单',
          bs: isBs(sum)
        };
      case 3:
        sum = arr.reduce((p: any, c: any) => Number(p) + Number(c));
        return {
          ...it,
          sum,
          openArr: arr,
          dx: sum <= 10 ? '小' : '大',
          ds: sum % 2 === 0 ? '双' : '单'
        };
      case 2:
        sum = Number(arr[0]) + Number(arr[1]);
        return {
          ...it,
          sum,
          openArr: arr,
          dx: sum <= 11 ? '小' : '大',
          ds: sum % 2 === 0 ? '双' : '单',
          ...isLh(arr)
        };
      case 1:
        sum = arr.reduce((p: any, c: any) => Number(p) + Number(c));
        return {
          ...it,
          sum,
          openArr: arr,
          dx: sum <= 22 ? '小' : '大',
          ds: sum % 2 === 0 ? '双' : '单',
          lh: arr[0] > arr[4] ? '龙' : '虎',
          q: isQzh(arr.slice(0, 3)),
          z: isQzh(arr.slice(1, 4)),
          h: isQzh(arr.slice(2, 5))
        };
    }
  });

