import React, { useState } from 'react';
import { FileLoad } from '../stages/sheets/fileLoadDialog';

interface NavProps {
    page: 'landing' | 'lab-cbt' | 'lab-dest' | 'force';
}

function RootNav(
    {
        page
    }: NavProps
): JSX.Element {
    const [paths, setPaths] = useState<string[]>([]);
    
    return (
        <>
            <nav>
                {page === 'landing' && (
                    <ol>
                        <li>Main</li>
                        <li>MekLab</li>
                        <li>Sheets</li>
                        <li>Force Organization</li>
                    </ol> 
                )}
                {page === 'lab-cbt' && (
                    <ol>
                        <li>New</li>
                        <FileLoad filePathsOut={setPaths}></FileLoad>
                        <li>Unit Settings</li>
                        <li>Save</li>
                    </ol>
                )}
                {page === 'lab-dest' && (
                    <ol>
                        <li>New</li>
                        <li>Load</li>
                        <li>Unit Settings</li>
                        <li>Save</li>
                    </ol>
                )}
                {page === 'force' && (
                    <ol>
                        <li>New</li>
                        <li>Load</li>
                        <li>Force Settings</li>
                        <li>Save</li>
                    </ol>
                )}
            </nav>
        </>
    )
} 

export default RootNav;