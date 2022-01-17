function doIt() {
    $( ".burger-menu" ).show( "slow" );
  }
$( ".burger-button" ).click( doIt );

function hideIt() {
    $( ".burger-menu" ).hide( "slow" );
  }

  $( ".burger-exit" ).click( hideIt );

function searchIt() {
    $( ".search-alert" ).show("fast" );
    $( ".search-close" ).show( );
    $( ".search-button" ).hide( );
  }
$( ".search-button" ).click( searchIt );

function searchclose() {
  $( ".search-alert" ).hide( );
  $( ".search-close" ).hide( );
  $( ".search-button" ).show( );
}
$( ".search-close" ).click(searchclose);


