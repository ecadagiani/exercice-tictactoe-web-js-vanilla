

$( function() {
    $( ".case" ).click( ( event ) => {
        const column = +event.currentTarget.getAttribute( "data-column" );
        const row    = +event.currentTarget.getAttribute( "data-row" );

        const res = processTicTacToe( row, column );

        if ( !Array.isArray( res ) ) {
            console.error(new Error( "ERREUR - Le retour de processTicTacToe n'est pas un tableau" ));
            return;
        }

        for ( let i = 0; i < res.length; i++ ) {
            if ( !Array.isArray( res[i] ) ) {
                console.error(new Error( `ERREUR - Le retour de processTicTacToe n'est pas un tableau pour l'index ${i}` ));
                return;
            }

            for ( let j = 0; j < res[i].length; j++ ) {
                if ( res[i][j] === TEAM.CROSS ) {
                    $( `#case-${i}-${j}` ).removeClass( "round" ).addClass( "cross" ).html( `
                        <i class="fas fa-times fa-4x"></i>
                    ` );
                } else if ( res[i][j] === TEAM.ROUND ) {
                    $( `#case-${i}-${j}` ).removeClass( "cross" ).addClass( "round" ).html( `
                        <i class="far fa-circle fa-4x"></i>
                    ` );
                } else {
                    $( `#case-${i}-${j}` ).removeClass( "cross" ).removeClass( "round" ).empty();
                }
            }
        }

    } );
} );
