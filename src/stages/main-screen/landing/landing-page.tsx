import RootNav from "../../../navigation/root-nav";

export function LandingPage() {
    return (
        <>
            <RootNav page='landing' />
            <h1>Elect Meklab</h1>
            <section>
                <h2>Load Unit File</h2>
                <p>Should be able to pick from sheet type and then work through list of exising files to load. </p>
            </section>
            <section>
                <h2>Create a New Unit</h2>
                <p>Should be able to pick sheet type and dive in.</p>
            </section>
            <section>
                <h2>Settings</h2>
                <p>self explanitory</p>
            </section>
            <section>
                <h2>Force Creation and Lists</h2>
                <p>load or create a new list and the kind of sheets to use.</p>
            </section>
        </>
    );
}
