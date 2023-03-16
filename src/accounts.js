exports.splitter = (arr = [], charLimit = 480) => {
  let iter = 0;
  const result = [];
  let buffer = [];
  for (let i = 0; i < arr.length; i++) {
    buffer.push(arr[i]);
    iter += (arr[i].length + 9); //'from:'.length + ' OR '.length
    if (iter >= charLimit) {
      result.push(buffer);
      iter = 0;
      buffer = [];
    }
  }
  if (buffer.length)
    result.push(buffer)
  return result;
}
exports.accounts = [
  "1380168103846367234",
  "1340039818038956033",
  "1284890693907951618",
  "1262845575147458560",
  "1229894509003182080",
  "1188329290162675713",
  "1166264285267464194",
  "1100799337272168448",
  "1100266332283559936",
  "1087729678977241089",
  "1050478262009262080",
  "905563470707515394",
  "841694471293173760",
  "789303014192402432",
  "718916004072570880",
  "4473582389",
  "4107939250",
  "2592557856",
  "2573619805",
  "2407993940",
  "1364845405",
  "936079812",
  "635608354",
  "469509327",
  "467634893",
  "398222025",
  "359412210",
  "326235705",
  "314587185",
  "219189088",
  "172323296",
  "144611647",
  "110856776",
  "63980569",
  "943906396180905984",
  "47438401",
  "40503861",
  "39344961",
  "34371118",
  "32792712",
  "22495070",
  "21976616",
  "17745925",
  "17175213",
  "14047387",
  "2592557856",
];
