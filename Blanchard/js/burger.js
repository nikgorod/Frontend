function doIt() {
    $( ".burger-menu" ).show( "slow" );
  }
$( ".burger-button" ).click( doIt );

function hideIt() {
    $( ".burger-menu" ).hide( "slow" );
  }

  $( ".burger-exit" ).click( hideIt );

function searchIt() {
    $( ".search-alert" ).show( "slow" );
  }
$( ".search-button" ).click( searchIt );

function searchclose() {
  $( ".search-alert" ).hide( "slow" );
}
$( ".search-close" ).click( searchclose );
