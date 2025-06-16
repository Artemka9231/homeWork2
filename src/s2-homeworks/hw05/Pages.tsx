import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
}

function Pages() {
    return (
        <div>
            <Routes>
                {/* Redirect from root to Pre-Junior page */}
                <Route path="/" element={<Navigate to={PATH.PRE_JUNIOR} replace />} />

                {/* Route for Pre-Junior page */}
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior />} />

                {/* Route for Junior page */}
                <Route path={PATH.JUNIOR} element={<Junior />} />

                {/* Route for Junior-Plus page */}
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus />} />

                {/* Catch-all route for 404 errors */}
                <Route path="*" element={<Error404 />} />
            </Routes>
        </div>
    )
}

export default Pages