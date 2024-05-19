import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './stages/main-screen/landing/landing-page';
import { ClassicLab } from './stages/lab/cbt-lab/classic-lab';
import { DestinyLab } from './stages/lab/dest-lab/destiny-lab';
import { ForceOrganization } from './stages/unit-org/force-page';

function Meklab() {
    return (
        <HashRouter>
            <Routes>
                <Route 
                    element={
                        <LandingPage></LandingPage>
                    }
                    path="/" 
                />
                <Route 
                    element={
                        <ClassicLab></ClassicLab>
                    }
                    path="/lab/cbt" 
                />
                <Route
                    element={
                        <DestinyLab></DestinyLab>
                    }
                    path="/lab/dest"
                />
                <Route
                    element={
                        <ForceOrganization></ForceOrganization>
                    }
                    path="/force"
                />
            </Routes>
        </HashRouter>
    )
}

export default Meklab;