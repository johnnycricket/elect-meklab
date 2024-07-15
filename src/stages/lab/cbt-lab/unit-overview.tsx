export function UnitOverview(
    mech: 
) {

    return (
        <section>
            <h3>Type: {mechname} {designation}</h3>
            <div>
                <h4>Movement:</h4>
                <dl>
                    <dt>Walking:</dt><dd>{mech.walk}</dd>
                    <dt>Running:</dt><dd>{mech.run}</dd>
                    <dt>Jumping:</dt><dd>{mech.jump || 0}</dd>
                </dl>
            </div>
            <div>
                <h4>Details:</h4>
                <dl>
                    <dt>Tonnage:</dt><dd>{mech.tonnage}</dd>
                    <dt>Tech Base:</dt><dd>{mech.techlvl}</dd>
                    <dt>Rules Level:</dt><dd>{mech.techlvl}</dd>
                    <dt>Role:</dt><dd>{mech.fluff.role}</dd>
                </dl>
            </div>
        </section>
    )
}