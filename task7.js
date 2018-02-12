for (var year = 2014; year <= 2050; year++)
{
    var s = new Date(year, 0, 1);
    if ( s.getDay() === 0 )
        console.log("з 2014 по 2050, 1 число Січня  неділя в таких роках  "+year);
}