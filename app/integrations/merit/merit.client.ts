// import CryptoJS from 'crypto-js';

export const fetchData = async () => {
    const ApiId = process.env.MERIT_API_ID;
    const ApiKey = process.env.MERIT_API_KEY;

    try {
        const timestamp = getTimestamp();
        // const dataString = ApiId + timestamp;
        // const hash = CryptoJS.HmacSHA256(dataString, ApiKey);
        // const signature = CryptoJS.enc.Base64.stringify(hash);
        //
        // console.log(dataString);
        // console.log(hash);
        // console.log(signature);
        console.log(timestamp);
        console.log(ApiId);
        console.log(ApiKey);

        const url = 'https://aktiva.merit.ee/api/v1/' + 'getinvoices' + '?ApiId=' + ApiId + '&timestamp=' + timestamp// + '&signature=' + signature;
        const response = await fetch(url);

        console.log('Response:', response);
        return response;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error;
    }
};

function getTimestamp() {
    const d = new Date();
    const yyyy = d.getFullYear();
    const MM = pad2(d.getMonth() + 1);
    const dd = pad2(d.getDate());
    const HH = pad2(d.getHours());
    const mm = pad2(d.getMinutes());
    const ss = pad2(d.getSeconds());
    return yyyy + MM + dd + HH + mm + ss;
}

function pad2(n) {
    return n > 9 ? '' + n : '0' + n;
}
