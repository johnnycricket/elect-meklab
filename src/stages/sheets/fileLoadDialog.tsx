import {dialog} from 'electron';
import {} from 'react-dom';

type FileLoadProps = {
    filePathsOut: (newType: string[]) => void;
}

export function FileLoad(
    {
        filePathsOut
    }: FileLoadProps
){
    const triggerFileDialog = async () => {
        const pathPromise = await dialog.showOpenDialog(
            {
                buttonLabel: 'Open File',
                filters: [
                    {
                        name: 'Mech Files',
                        extensions: [
                            'mtf', 
                            'blk'
                        ]
                    }
                ],
                message: 'Open Existing Unit File',
                properties: [
                    'openFile',
                    'treatPackageAsDirectory'
                ]
            }
        );

        const paths = pathPromise.filePaths;

        filePathsOut(paths);
    }

    return (
        <>
            <button id="fileDialogBtn" onClick={triggerFileDialog}>Open CBT File</button>
        </>
    )
}