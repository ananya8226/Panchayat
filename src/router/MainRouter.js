import React from 'react'
import PublicRouter from '../router/PublicRouter'
import PrivateRouter, { BlockRouter, PanchayatRouter } from '../router/PrivateRouter'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../app/modules/authentication/sign-in/SignIn'
import ForgetPassword from '../app/modules/authentication/forget-password/ForgetPassword'
import ResetPassword from '../app/modules/authentication/reset-password/ResetPassword'
import PanchayatAccount from '../app/modules/admin/PanchayatAccount'
import EditAccount from '../app/modules/admin/EditAccount'
import Sector1form from '../app/modules/admin/Sector1form'
import Sector2form from '../app/modules/admin/Sector2form'
import Sector3form from '../app/modules/admin/Sector3form'
import Sector4form from '../app/modules/admin/Sector4form'
import Sector5form from '../app/modules/admin/Sector5form'
import Sector6form from '../app/modules/admin/Sector6form'
import Sector7form from '../app/modules/admin/Sector7form'
import Sector8form from '../app/modules/admin/Sector8form'
import Sector9form from '../app/modules/admin/Sector9form'
import StepperForm from '../app/components/StepperForm'
import ResetUserPassword from '../app/modules/authentication/reset-password/ResetUserPassword'
import PanchayatDashboard from '../app/modules/admin/PanchayatDashboard'
import BlockDashboard from '../app/modules/admin/BlockDashboard'
import ManagePanchayat from '../app/modules/admin/ManagePanchayat'
import PanchayatData from '../app/modules/admin/PanchayatData'
import PanchayatEditAccount from '../app/modules/admin/PanchayatEditAccount'
import BlockAccount from '../app/modules/admin/BlockAccount'
import BlockEditAccount from '../app/modules/admin/BlockEditAccount'
import Home from '../app/modules/admin/Home'
import Faq from '../app/components/Faq'
import PageNotFound from '../app/components/PageNotFound'
import { useSelector } from 'react-redux'

export const MainRoute = () => {

    // const designationId = useSelector((state) => state.loginDataReducer);
    // console.log(designationId, "designatiodghvcjhvh");

    return (
        <>
            <Routes>
                <Route path="/" element={<PublicRouter />}>
                    <Route index element={<Home />} />
                    <Route path="forgetpassword" element={<ForgetPassword />} />
                    <Route path="resetpassword" element={<ResetPassword />} />

                    <Route path='signin' element={<SignIn />} />
                    <Route path="/*" element={<PageNotFound />} />
                    
                </Route>

                <Route path="/" element={<PrivateRouter />}>

                    <Route path='/home' element={<Home />} />
                    <Route path='/faq' element={<Faq />} />
                    <Route path='/resetUserpassword' element={<ResetUserPassword />} />
                    <Route path="/*" element={<PageNotFound />} />

                        <Route path='/editaccount' element={<EditAccount />} />
                        <Route path='/sector1form' element={<Sector1form />} />
                        <Route path='/sector2form' element={<Sector2form />} />
                        <Route path='/sector3form' element={<Sector3form />} />
                        <Route path='/sector4form' element={<Sector4form />} />
                        <Route path='/sector5form' element={<Sector5form />} />
                        <Route path='/sector6form' element={<Sector6form />} />
                        <Route path='/sector7form' element={<Sector7form />} />
                        <Route path='/sector8form' element={<Sector8form />} />
                        <Route path='/sector9form' element={<Sector9form />} />
                        <Route path='/myform' element={<StepperForm />} />
                        <Route path='/panchayatAccount' element={<PanchayatAccount />} />
                        <Route path='/panchayatDashboard' element={<PanchayatDashboard />} />
                        <Route path='/panchayatEditAccount' element={<PanchayatEditAccount />} />
                
                        <Route path='/blockDashboard' element={<BlockDashboard />} />
                        <Route path='/managePanchayat' element={<ManagePanchayat />} />
                        <Route path='/panchayatData' element={<PanchayatData />} />

                        <Route path='/blockAccount' element={<BlockAccount />} />
                        <Route path='/blockEditAccount' element={<BlockEditAccount />} />
                    
                </Route>
            </Routes>
        </>
    )
}




// {
//     "lastFilledFormNo": 1,
//     "sectorId": 1,
//     "indicatorData": [
//       {
//         "numerator": 40,
//         "denominator": 100,
//         "indicatorId": 1
//       },
//       {
//         "numerator": 60,
//         "denominator": "100",
//         "indicatorId": 2
//       },
//       {
//         "numerator": 60,
//         "denominator": "100",
//         "indicatorId": 3
//       },
//       {
//         "numerator": 60,
//         "denominator": "100",
//         "indicatorId": 4
//       },
//       {
//         "numerator": 60,
//         "denominator": "100",
//         "indicatorId": 5
//       },
//       {
//         "numerator": 60,
//         "denominator": "100",
//         "indicatorId": 6
//       }
//     ]
//   }