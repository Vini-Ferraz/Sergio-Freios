/*Configuração da biblioteca para o uso das animações quando scrolla*/
ScrollReveal({ reset: true });
ScrollReveal().reveal('.show-side', 
{
    duration: 1500,
    origin: 'left',
    distance: '75px'
});
ScrollReveal().reveal('.show-up', 
{
    duration: 1500,
    origin: 'bottom',
    distance: '75px'
});