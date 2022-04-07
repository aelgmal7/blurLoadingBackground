const bg = document.querySelector('.bg')
const text = document.querySelector('.loading-text')
let loading = 0
const blur = () => {
    console.log('loading', loading)
    loading++
    loading > 99 ? clearInterval(int) : ''
    text.innerHTML =`${loading}%`
    text.style.opacity = scale(loading,0,100,0,1)
    bg.style.filter= `blur(${scale(loading,0,100,0,25)}px)`
}
const int = setInterval( blur, 30)

const scale = (num , in_min,in_max,out_min,out_max) => {
    return (num -in_min)/ (in_max - in_min) * (out_min - out_max) + out_max
}