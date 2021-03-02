$( function() {
    $( ".case" ).click( ( event ) => {
        const column = +event.currentTarget.getAttribute( "data-column" );
        const row    = +event.currentTarget.getAttribute( "data-row" );

        const [board1, board2] = processTicTacToe( row, column );

        processBoard( board1 );
        setTimeout( () => processBoard( board2 ), 500 );

    } );
} );

function processBoard( board ) {

    if ( !Array.isArray( board ) ) {
        console.error( new Error( "ERREUR - Le retour de processTicTacToe n'est pas un tableau" ) );
        return;
    }

    for ( let i = 0; i < board.length; i++ ) {
        if ( !Array.isArray( board[i] ) ) {
            console.error( new Error( `ERREUR - Le retour de processTicTacToe n'est pas un tableau pour l'index ${i}` ) );
            return;
        }

        for ( let j = 0; j < board[i].length; j++ ) {
            if ( board[i][j] === TEAM.CROSS ) {
                $( `#case-${i}-${j}` ).removeClass( "round" ).addClass( "cross" ).html( `
                        <i class="fas fa-times fa-4x"></i>
                    ` );
            } else if ( board[i][j] === TEAM.ROUND ) {
                $( `#case-${i}-${j}` ).removeClass( "cross" ).addClass( "round" ).html( `
                        <i class="far fa-circle fa-4x"></i>
                    ` );
            } else {
                $( `#case-${i}-${j}` ).removeClass( "cross" ).removeClass( "round" ).empty();
            }
        }
    }
}
