/*
I heavily borrowed from your aassignment one module but think I have gotten it to do what we wanted.

As of now, It seems to be differentiating a number or a string and concatenating the string using stringbuild if it is text.
If it is a number it uses the processnumber function you showed us how to build.

I also added in a way to clear the field after every submit and to start over the string part when you hit reset.

*/


(function() {
'use strict';
//=============================================================================

var numbers = [];
var count = 0;
var sum = 0;
var stringbuild = " ";
var average;


DisplayStats( );

$('#submit').on( 'click', processForm );
$('#reset').on( 'click', reset );
$('#the-number').on( 'focus', clearMessage );

//=============================================================================

function processForm( evt ) {
    var val = $('#the-input').val();
    var num = parseFloat( val );
    if ( isNaN( num ) ) {
        stringbuild = stringbuild += val;
        showMessage(stringbuild);
    } else {
        processNumber( num );
    }
    evt.preventDefault( );
    $("#the-input").val(' ');
}

//=============================================================================

function processNumber( number ) {
    numbers.push( number );
    ComputeStats( );
    DisplayStats( );
}

//=============================================================================

function ComputeStats( ) {
    var i;
    var sum2 = 0;
    var diff;
    var variance;

    count = numbers.length;

    sum = 0;
    for ( i = 0; i < count; ++i ) {
        sum += numbers[ i ];
    }

    if ( count > 0 ) {
        average = sum / count;
    } else {
        average = undefined;
    }
}

//=============================================================================

function DisplayStats( ) {
    displayValue( '#count', count );
    displayValue( '#sum', sum );
    displayValue( '#average', average );
 

    //-------------------------------------------------------------------------

    function displayValue( selector, value ) {
        if ( value === undefined ) {
            $( selector ).empty( );
        } else {
            $( selector ).text( value );
        }
    }
}

//=============================================================================

function reset( ) {
    numbers = [];
    stringbuild = " ";
    showMessage(stringbuild);
    ComputeStats( );
    DisplayStats( );
}

//=============================================================================

function showMessage( msg ) {
    $('#message' ).text( msg );
}

//-----------------------------------------------------------------------------

function clearMessage( ) {
    $('#message' ).text( '' );
}

//=============================================================================
})();