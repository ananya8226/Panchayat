import React, { useEffect, useState } from 'react';
import FilterComponent from './FilterComponent';
import compositeScore from '../../assets/compositeScore.svg';
import arrowUp from '../../assets/arrow-up.svg';
import arrowDown from '../../assets/arrow-down.svg';
import agriculture from '../../assets/agriculture.svg';
import basic from '../../assets/basic.svg';
import education from '../../assets/education.svg';
import rural from '../../assets/rural.svg';
import skills from '../../assets/skills.svg';
import goverance from '../../assets/goverance.svg';
import health from '../../assets/health.svg';
import enviroment from '../../assets/enviroment.svg';
import indiviuals from '../../assets/indiviuals.svg';
import '../../styles/home.scss';
import { GET } from '../../services/api/api';
import { useSelector } from 'react-redux';
import Filter from './Filter';


function HomeDiv1() {

    const option1 = [
        { id: 0, blockName: '2023', }
    ];
    const label1 = "Year";

    const option2 = [
        { id: 0, blockName: 'March', }
    ];
    const label2 = "Month";

    const option3 = [
        { id: 1, blockName: 'ANANTNAG', },
    ];
    const label3 = "District";

    const label4 = "Block";

    const FilterWidth = "24%";

    const block_filter = useSelector(state => state.blockFilterReducer.blockFilter);
 
    const [option4, setOption4] = useState(block_filter);
    const [id1, setId1] = useState(3);
    const [top3, setTop3] = useState([]);
    const [bottom3, setBottom3] = useState([]);
    const [topBottomSector, setTopBottomSector] = useState([]);

    // console.log(block_filter, "filter for block")

    const topBottomPanchayat = async () => {
        let params = {
            districtId: '2',
            blockId: id1,
            month: '3',
            year: '2023',
        }
        const res = await GET("dashboard/top-bottom-panchayat", params);

        // console.log(params.blockId, "ghhh", id1);
        setBottom3(res?.data?.result?.bottomPanchayat);
        setTop3(res?.data?.result?.topPanchayat);
    }
    console.log("ghhh", id1);
    const topBottomSectorPanchayat = async () => {
        let params = {
            districtId: '2',
            blockId: id1,
            month: '3',
            year: '2023',
        }
        const res = await GET("dashboard/top-bottom-sector-panchayat", params);
        setTopBottomSector(res?.data?.result);
        // console.log(res?.data?.result, " top bottom sector 3");
    }

    useEffect(() => {
        topBottomPanchayat();
        topBottomSectorPanchayat();
        // blockFilterData();  
    }, [id1]);

    return (
        <div className='home-div-1'>
            <div className='filter'>
                <FilterComponent options={option1} label={label1} width={FilterWidth} />
                <FilterComponent options={option2} label={label2} width={FilterWidth} />
                <FilterComponent options={option3} label={label3} width={FilterWidth} />
                <Filter options={option4} label={label4} width={FilterWidth} setId={setId1} />
            </div>

            <div className='composite-score'>
                <div className='composite-score-logoText' >
                    <img src={compositeScore} alt="compositeScore" />
                    <span><p>Composite Score March 2023</p></span>
                </div>
                <div className='top3'>

                    Top 3 Panchayat Performance

                    <div className='performer'>
                        <div> <p className='performer-score'>{top3?.[0]?.panchayatCompositeScore}<img src={arrowUp} alt="arrowUp" /></p> <p className='performer-name'>{top3?.[0]?.name} </p></div>
                        <div> <p className='performer-score'>{top3?.[1]?.panchayatCompositeScore}<img src={arrowUp} alt="arrowUp" /></p><p className='performer-name'>{top3?.[1]?.name} </p></div>
                        <div> <p className='performer-score'>{top3?.[2]?.panchayatCompositeScore}<img src={arrowUp} alt="arrowUp" /></p><p className='performer-name'>{top3?.[2]?.name}</p></div>
                    </div>
                </div>
                <div className='top3'>

                    Botttom 3 Panchayat Performance

                    <div className='performer'>
                        <div><p className='performer-score'>{bottom3?.[0]?.panchayatCompositeScore} <img src={arrowDown} alt="arrowUp" /></p><p className='performer-name'>{bottom3?.[0]?.name}</p></div>
                        <div> <p className='performer-score'>{bottom3?.[1]?.panchayatCompositeScore}<img src={arrowDown} alt="arrowUp" /></p><p className='performer-name'>{bottom3?.[1]?.name} </p></div>
                        <div><p className='performer-score'>{bottom3?.[2]?.panchayatCompositeScore}<img src={arrowDown} alt="arrowUp" /></p><p className='performer-name'>{bottom3?.[2]?.name}</p></div>
                    </div>
                </div>
            </div>

            <div className='score-cards'>
                <div className='col'>
                    <div className='card'>
                        <div className='card1-header'>
                            <img src={agriculture} alt="agriculture" />
                            <span><p>Agriculture and allied sectors</p></span>
                        </div>
                        <div className='card1'>

                            <div className='card-body-col'>
                                Top 3 Panchayat
                                <div className='card-body-col-1'>
                                    <div> <p className='performer-score'>{topBottomSector[0]?.topSectorPanchayat?.[0]?.compositeScore}<img src={arrowUp} alt="arrowUp" /></p><p className='performer-name'>{topBottomSector[0]?.topSectorPanchayat?.[0]?.panchayatMaster?.name} </p></div>
                                    <div> <p className='performer-score'>{topBottomSector[0]?.topSectorPanchayat?.[1]?.compositeScore}<img src={arrowUp} alt="arrowUp" /></p><p className='performer-name'>{topBottomSector[0]?.topSectorPanchayat?.[1]?.panchayatMaster?.name} </p></div>
                                    <div> <p className='performer-score'>{topBottomSector[0]?.topSectorPanchayat?.[2]?.compositeScore}<img src={arrowUp} alt="arrowUp" /></p><p className='performer-name'>{topBottomSector[0]?.topSectorPanchayat?.[2]?.panchayatMaster?.name}</p></div>
                                </div>
                            </div>
                            <div className='card-body-col'>
                                Botttom 3 Panchayat
                                <div className='card-body-col-1'>
                                    <div><p className='performer-score'>{topBottomSector[0]?.bottomSectorPanchayat?.[0]?.compositeScore}<img src={arrowDown} alt="arrowDown" /></p><p className='performer-name'>{topBottomSector[0]?.bottomSectorPanchayat?.[0]?.panchayatMaster?.name}</p></div>
                                    <div><p className='performer-score'>{topBottomSector[0]?.bottomSectorPanchayat?.[1]?.compositeScore}<img src={arrowDown} alt="arrowDown" /></p><p className='performer-name'>{topBottomSector[0]?.bottomSectorPanchayat?.[1]?.panchayatMaster?.name} </p></div>
                                    <div><p className='performer-score'>{topBottomSector[0]?.bottomSectorPanchayat?.[2]?.compositeScore}<img src={arrowDown} alt="arrowDown" /></p><p className='performer-name'>{topBottomSector[0]?.bottomSectorPanchayat?.[2]?.panchayatMaster?.name}</p></div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='card '>
                        <div className='card2-header'>
                            <img src={health} alt="health" />
                            <span><p>
                                Health and Nutrition</p></span>
                        </div>
                        <div className='card2'>
                            <div className='card-body-col'>
                                Top 3 Panchayat
                                <div className='card-body-col-1'>
                                    <div> <p className='performer-score'>{topBottomSector?.[1]?.topSectorPanchayat?.[0]?.compositeScore}<img src={arrowUp} alt="arrowUp" /></p><p className='performer-name'>{topBottomSector?.[1]?.topSectorPanchayat?.[0]?.panchayatMaster?.name} </p></div>
                                    <div> <p className='performer-score'>{topBottomSector?.[1]?.topSectorPanchayat?.[1]?.compositeScore}<img src={arrowUp} alt="arrowUp" /></p><p className='performer-name'>{topBottomSector?.[1]?.topSectorPanchayat?.[1]?.panchayatMaster?.name} </p></div>
                                    <div> <p className='performer-score'>{topBottomSector?.[1]?.topSectorPanchayat?.[2]?.compositeScore}<img src={arrowUp} alt="arrowUp" /></p><p className='performer-name'>{topBottomSector?.[1]?.topSectorPanchayat?.[2]?.panchayatMaster?.name}</p></div>
                                </div>
                            </div>
                            <div className='card-body-col'>
                                Botttom 3 Panchayat
                                <div className='card-body-col-1'>
                                    <div><p className='performer-score'>{topBottomSector?.[1]?.bottomSectorPanchayat?.[0]?.compositeScore}<img src={arrowDown} alt="arrowDown" /></p><p className='performer-name'>{topBottomSector?.[1]?.bottomSectorPanchayat?.[0]?.panchayatMaster?.name}</p></div>
                                    <div><p className='performer-score'>{topBottomSector?.[1]?.bottomSectorPanchayat?.[1]?.compositeScore}<img src={arrowDown} alt="arrowDown" /></p><p className='performer-name'>{topBottomSector?.[1]?.bottomSectorPanchayat?.[1]?.panchayatMaster?.name} </p></div>
                                    <div><p className='performer-score'>{topBottomSector?.[1]?.bottomSectorPanchayat?.[2]?.compositeScore}<img src={arrowDown} alt="arrowDown" /></p><p className='performer-name'>{topBottomSector?.[1]?.bottomSectorPanchayat?.[2]?.panchayatMaster?.name}</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card3-header'>
                            <img src={education} alt="education" />
                            <span><p>
                                Education</p></span>
                        </div>
                        <div className='card3'>
                            <div className='card-body-col'>
                                Top 3 Panchayat
                                <div className='card-body-col-1'>
                                    <div> <p className='performer-score'>{topBottomSector[2]?.topSectorPanchayat?.[0]?.compositeScore}<img src={arrowUp} alt="arrowUp" /></p><p className='performer-name'>{topBottomSector[2]?.topSectorPanchayat?.[0]?.panchayatMaster?.name} </p></div>
                                    <div> <p className='performer-score'>{topBottomSector[2]?.topSectorPanchayat?.[1]?.compositeScore}<img src={arrowUp} alt="arrowUp" /></p><p className='performer-name'>{topBottomSector[2]?.topSectorPanchayat?.[1]?.panchayatMaster?.name} </p></div>
                                    <div> <p className='performer-score'>{topBottomSector[2]?.topSectorPanchayat?.[2]?.compositeScore}<img src={arrowUp} alt="arrowUp" /></p><p className='performer-name'>{topBottomSector[2]?.topSectorPanchayat?.[2]?.panchayatMaster?.name}</p></div>
                                </div>
                            </div>
                            <div className='card-body-col'>
                                Botttom 3 Panchayat
                                <div className='card-body-col-1'>
                                    <div><p className='performer-score'>{topBottomSector[2]?.bottomSectorPanchayat?.[0]?.compositeScore}<img src={arrowDown} alt="arrowDown" /></p><p className='performer-name'>{topBottomSector[2]?.bottomSectorPanchayat?.[0]?.panchayatMaster?.name}</p></div>
                                    <div><p className='performer-score'>{topBottomSector[2]?.bottomSectorPanchayat?.[1]?.compositeScore}<img src={arrowDown} alt="arrowDown" /></p><p className='performer-name'>{topBottomSector[2]?.bottomSectorPanchayat?.[1]?.panchayatMaster?.name} </p></div>
                                    <div><p className='performer-score'>{topBottomSector[2]?.bottomSectorPanchayat?.[2]?.compositeScore}<img src={arrowDown} alt="arrowDown" /></p><p className='performer-name'>{topBottomSector[2]?.bottomSectorPanchayat?.[2]?.panchayatMaster?.name}</p></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='col'>
                    <div className='card '>
                        <div className='card4-header'>
                            <img src={rural} alt="rural" />
                            <span><p>
                                Rural Development and Sanitation</p></span>
                        </div>
                        <div className='card4'>
                            <div className='card-body-col'>
                                Top 3 Panchayat
                                <div className='card-body-col-1'>
                                    <div> <p className='performer-score'>{topBottomSector[3]?.topSectorPanchayat?.[0]?.compositeScore}<img src={arrowUp} alt="arrowUp" /></p><p className='performer-name'>{topBottomSector[3]?.topSectorPanchayat?.[0]?.panchayatMaster?.name} </p></div>
                                    <div> <p className='performer-score'>{topBottomSector[3]?.topSectorPanchayat?.[1]?.compositeScore}<img src={arrowUp} alt="arrowUp" /></p><p className='performer-name'>{topBottomSector[3]?.topSectorPanchayat?.[1]?.panchayatMaster?.name} </p></div>
                                    <div> <p className='performer-score'>{topBottomSector[3]?.topSectorPanchayat?.[2]?.compositeScore}<img src={arrowUp} alt="arrowUp" /></p><p className='performer-name'>{topBottomSector[3]?.topSectorPanchayat?.[2]?.panchayatMaster?.name}</p></div>
                                </div>
                            </div>
                            <div className='card-body-col'>
                                Botttom 3 Panchayat
                                <div className='card-body-col-1'>
                                    <div><p className='performer-score'>{topBottomSector[3]?.bottomSectorPanchayat?.[0]?.compositeScore}<img src={arrowDown} alt="arrowDown" /></p><p className='performer-name'>{topBottomSector[3]?.bottomSectorPanchayat?.[0]?.panchayatMaster?.name}</p></div>
                                    <div><p className='performer-score'>{topBottomSector[3]?.bottomSectorPanchayat?.[1]?.compositeScore}<img src={arrowDown} alt="arrowDown" /></p><p className='performer-name'>{topBottomSector[3]?.bottomSectorPanchayat?.[1]?.panchayatMaster?.name} </p></div>
                                    <div><p className='performer-score'>{topBottomSector[3]?.bottomSectorPanchayat?.[2]?.compositeScore}<img src={arrowDown} alt="arrowDown" /></p><p className='performer-name'>{topBottomSector[3]?.bottomSectorPanchayat?.[2]?.panchayatMaster?.name}</p></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='card'>
                        <div className='card5-header'>
                            <img src={indiviuals} alt="indiviuals" />
                            <span><p>
                                Individual Beneficiary Schemes </p></span>
                        </div>
                        <div className='card5'>
                            <div className='card-body-col'>
                                Top 3 Panchayat
                                <div className='card-body-col-1'>
                                    <div> <p className='performer-score'>{topBottomSector[4]?.topSectorPanchayat?.[0]?.compositeScore}<img src={arrowUp} alt="arrowUp" /></p><p className='performer-name'>{topBottomSector[4]?.topSectorPanchayat?.[0]?.panchayatMaster?.name} </p></div>
                                    <div> <p className='performer-score'>{topBottomSector[4]?.topSectorPanchayat?.[1]?.compositeScore}<img src={arrowUp} alt="arrowUp" /></p><p className='performer-name'>{topBottomSector[4]?.topSectorPanchayat?.[1]?.panchayatMaster?.name} </p></div>
                                    <div> <p className='performer-score'>{topBottomSector[4]?.topSectorPanchayat?.[2]?.compositeScore}<img src={arrowUp} alt="arrowUp" /></p><p className='performer-name'>{topBottomSector[4]?.topSectorPanchayat?.[2]?.panchayatMaster?.name}</p></div>
                                </div>
                            </div>
                            <div className='card-body-col'>
                                Botttom 3 Panchayat
                                <div className='card-body-col-1'>
                                    <div><p className='performer-score'>{topBottomSector[4]?.bottomSectorPanchayat?.[0]?.compositeScore}<img src={arrowDown} alt="arrowDown" /></p><p className='performer-name'>{topBottomSector[4]?.bottomSectorPanchayat?.[0]?.panchayatMaster?.name}</p></div>
                                    <div><p className='performer-score'>{topBottomSector[4]?.bottomSectorPanchayat?.[1]?.compositeScore}<img src={arrowDown} alt="arrowDown" /></p><p className='performer-name'>{topBottomSector[4]?.bottomSectorPanchayat?.[1]?.panchayatMaster?.name} </p></div>
                                    <div><p className='performer-score'>{topBottomSector[4]?.bottomSectorPanchayat?.[2]?.compositeScore}<img src={arrowDown} alt="arrowDown" /></p><p className='performer-name'>{topBottomSector[4]?.bottomSectorPanchayat?.[2]?.panchayatMaster?.name}</p></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='card'>
                        <div className='card6-header'>
                            <img src={skills} alt="skills" />
                            <span><p>
                                Skills Development and Employement </p></span>
                        </div>
                        <div className='card6'>
                            <div className='card-body-col'>
                                Top 3 Panchayat
                                <div className='card-body-col-1'>
                                    <div> <p className='performer-score'>{topBottomSector[5]?.topSectorPanchayat?.[0]?.compositeScore}<img src={arrowUp} alt="arrowUp" /></p><p className='performer-name'>{topBottomSector[5]?.topSectorPanchayat?.[0]?.panchayatMaster?.name} </p></div>
                                    <div> <p className='performer-score'>{topBottomSector[5]?.topSectorPanchayat?.[1]?.compositeScore}<img src={arrowUp} alt="arrowUp" /></p><p className='performer-name'>{topBottomSector[5]?.topSectorPanchayat?.[1]?.panchayatMaster?.name} </p></div>
                                    <div> <p className='performer-score'>{topBottomSector[5]?.topSectorPanchayat?.[2]?.compositeScore}<img src={arrowUp} alt="arrowUp" /></p><p className='performer-name'>{topBottomSector[5]?.topSectorPanchayat?.[2]?.panchayatMaster?.name}</p></div>
                                </div>
                            </div>
                            <div className='card-body-col'>
                                Botttom 3 Panchayat
                                <div className='card-body-col-1'>
                                    <div><p className='performer-score'>{topBottomSector[5]?.bottomSectorPanchayat?.[0]?.compositeScore}<img src={arrowDown} alt="arrowDown" /></p><p className='performer-name'>{topBottomSector[5]?.bottomSectorPanchayat?.[0]?.panchayatMaster?.name}</p></div>
                                    <div><p className='performer-score'>{topBottomSector[5]?.bottomSectorPanchayat?.[1]?.compositeScore}<img src={arrowDown} alt="arrowDown" /></p><p className='performer-name'>{topBottomSector[5]?.bottomSectorPanchayat?.[1]?.panchayatMaster?.name} </p></div>
                                    <div><p className='performer-score'>{topBottomSector[5]?.bottomSectorPanchayat?.[2]?.compositeScore}<img src={arrowDown} alt="arrowDown" /></p><p className='performer-name'>{topBottomSector[5]?.bottomSectorPanchayat?.[2]?.panchayatMaster?.name}</p></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='col'>
                    <div className='card '>
                        <div className='card7-header'>
                            <img src={basic} alt="basic" />
                            <span><p>
                                Basic Infrastructure </p></span>
                        </div>
                        <div className='card7'>
                            <div className='card-body-col'>
                                Top 3 Panchayat
                                <div className='card-body-col-1'>
                                    <div> <p className='performer-score'>{topBottomSector[6]?.topSectorPanchayat?.[0]?.compositeScore}<img src={arrowUp} alt="arrowUp" /></p><p className='performer-name'>{topBottomSector[6]?.topSectorPanchayat?.[0]?.panchayatMaster?.name} </p></div>
                                    <div> <p className='performer-score'>{topBottomSector[6]?.topSectorPanchayat?.[1]?.compositeScore}<img src={arrowUp} alt="arrowUp" /></p><p className='performer-name'>{topBottomSector[6]?.topSectorPanchayat?.[1]?.panchayatMaster?.name} </p></div>
                                    <div> <p className='performer-score'>{topBottomSector[6]?.topSectorPanchayat?.[2]?.compositeScore}<img src={arrowUp} alt="arrowUp" /></p><p className='performer-name'>{topBottomSector[6]?.topSectorPanchayat?.[2]?.panchayatMaster?.name}</p></div>
                                </div>
                            </div>
                            <div className='card-body-col'>
                                Botttom 3 Panchayat
                                <div className='card-body-col-1'>
                                    <div><p className='performer-score'>{topBottomSector[6]?.bottomSectorPanchayat?.[0]?.compositeScore}<img src={arrowDown} alt="arrowDown" /></p><p className='performer-name'>{topBottomSector[6]?.bottomSectorPanchayat?.[0]?.panchayatMaster?.name}</p></div>
                                    <div><p className='performer-score'>{topBottomSector[6]?.bottomSectorPanchayat?.[1]?.compositeScore}<img src={arrowDown} alt="arrowDown" /></p><p className='performer-name'>{topBottomSector[6]?.bottomSectorPanchayat?.[1]?.panchayatMaster?.name} </p></div>
                                    <div><p className='performer-score'>{topBottomSector[6]?.bottomSectorPanchayat?.[2]?.compositeScore}<img src={arrowDown} alt="arrowDown" /></p><p className='performer-name'>{topBottomSector[6]?.bottomSectorPanchayat?.[2]?.panchayatMaster?.name}</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card8-header'>
                            <img src={enviroment} alt="enviroment" />
                            <span><p>
                                Environment </p></span>
                        </div>
                        <div className='card8'>
                            <div className='card-body-col'>
                                Top 3 Panchayat
                                <div className='card-body-col-1'>
                                    <div> <p className='performer-score'>{topBottomSector[7]?.topSectorPanchayat?.[0]?.compositeScore}<img src={arrowUp} alt="arrowUp" /></p><p className='performer-name'>{topBottomSector[7]?.topSectorPanchayat?.[0]?.panchayatMaster?.name} </p></div>
                                    <div> <p className='performer-score'>{topBottomSector[7]?.topSectorPanchayat?.[1]?.compositeScore}<img src={arrowUp} alt="arrowUp" /></p><p className='performer-name'>{topBottomSector[7]?.topSectorPanchayat?.[1]?.panchayatMaster?.name} </p></div>
                                    <div> <p className='performer-score'>{topBottomSector[7]?.topSectorPanchayat?.[2]?.compositeScore}<img src={arrowUp} alt="arrowUp" /></p><p className='performer-name'>{topBottomSector[7]?.topSectorPanchayat?.[2]?.panchayatMaster?.name}</p></div>
                                </div>
                            </div>
                            <div className='card-body-col'>
                                Botttom 3 Panchayat
                                <div className='card-body-col-1'>
                                    <div><p className='performer-score'>{topBottomSector[7]?.bottomSectorPanchayat?.[0]?.compositeScore}<img src={arrowDown} alt="arrowDown" /></p><p className='performer-name'>{topBottomSector[7]?.bottomSectorPanchayat?.[0]?.panchayatMaster?.name}</p></div>
                                    <div><p className='performer-score'>{topBottomSector[7]?.bottomSectorPanchayat?.[1]?.compositeScore}<img src={arrowDown} alt="arrowDown" /></p><p className='performer-name'>{topBottomSector[7]?.bottomSectorPanchayat?.[1]?.panchayatMaster?.name} </p></div>
                                    <div><p className='performer-score'>{topBottomSector[7]?.bottomSectorPanchayat?.[2]?.compositeScore}<img src={arrowDown} alt="arrowDown" /></p><p className='performer-name'>{topBottomSector[7]?.bottomSectorPanchayat?.[2]?.panchayatMaster?.name}</p></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='card'>
                        <div className='card9-header'>
                            <img src={goverance} alt="governance" />
                            <span><p>
                                Governance </p></span>

                        </div>
                        <div className='card9'>
                            <div className='card-body-col'>
                                Top 3 Panchayat
                                <div className='card-body-col-1'>
                                    <div> <p className='performer-score'>{topBottomSector[8]?.topSectorPanchayat?.[0]?.compositeScore}<img src={arrowUp} alt="arrowUp" /></p><p className='performer-name'>{topBottomSector[8]?.topSectorPanchayat?.[0]?.panchayatMaster?.name} </p></div>
                                    <div> <p className='performer-score'>{topBottomSector[8]?.topSectorPanchayat?.[1]?.compositeScore}<img src={arrowUp} alt="arrowUp" /></p><p className='performer-name'>{topBottomSector[8]?.topSectorPanchayat?.[1]?.panchayatMaster?.name} </p></div>
                                    <div> <p className='performer-score'>{topBottomSector[8]?.topSectorPanchayat?.[2]?.compositeScore}<img src={arrowUp} alt="arrowUp" /></p><p className='performer-name'>{topBottomSector[8]?.topSectorPanchayat?.[2]?.panchayatMaster?.name}</p></div>
                                </div>
                            </div>
                            <div className='card-body-col'>
                                Botttom 3 Panchayat
                                <div className='card-body-col-1'>
                                    <div><p className='performer-score'>{topBottomSector[8]?.bottomSectorPanchayat?.[0]?.compositeScore}<img src={arrowDown} alt="arrowDown" /></p><p className='performer-name'>{topBottomSector[8]?.bottomSectorPanchayat?.[0]?.panchayatMaster?.name}</p></div>
                                    <div><p className='performer-score'>{topBottomSector[8]?.bottomSectorPanchayat?.[1]?.compositeScore}<img src={arrowDown} alt="arrowDown" /></p><p className='performer-name'>{topBottomSector[8]?.bottomSectorPanchayat?.[1]?.panchayatMaster?.name} </p></div>
                                    <div><p className='performer-score'>{topBottomSector[8]?.bottomSectorPanchayat?.[2]?.compositeScore}<img src={arrowDown} alt="arrowDown" /></p><p className='performer-name'>{topBottomSector[8]?.bottomSectorPanchayat?.[2]?.panchayatMaster?.name}</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeDiv1