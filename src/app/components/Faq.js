import React, { useState, useEffect } from 'react';
import { GET } from '../../services/api/api';
import '../../styles/faq.scss';

function Faq() {

    const [data, setData] = useState([]);
    const getFaq = async () => {
        const res = await GET("users/faqs");
        // console.log(res?.data?.result?.rows);
        if (res?.data?.success)
            setData(res?.data?.result?.rows);

        // console.log("data", data);
    }

    useEffect(() => {
        getFaq();
    }, []);

    return (
        <div className='main-body-faq'>
            <h2>Frequently Asked Questions</h2>
            <div className='faq-section'></div>
            <ol>
                {
                    data.map((faq) => <>
                        <li style={{ fontWeight: "600", marginBottom:"0.8rem"}} className='faq-question'>{faq.question}</li>
                        <div style={{ marginBottom:"2rem"}} className='faq-answer'>{faq.answer}</div>
                       
                    </>)
                }
            </ol>
        </div>
    )
}

export default Faq;