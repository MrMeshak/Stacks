export const colors = {
    lightBlue: '#DAEAF6',
    darkBlue: '#389FEC',
    lightYellow: '#FCF4DD',
    darkYellow: '#F9CC4D',
    lightGreen: '#DDEDEA',
    darkGreen: '#4FCAB5',
    lightRed: '#FCE1E4',
    darkRed: '#FF6876',
    lightPurple: '#E8dff5',
    darkPurple: '#AD7FEF',
    brightGreen: '#01d449',
    lightGrey: '#D3D3D3',
    white: '#FFFFF'
}

export function getColorTheme(color: string){
    if(color === "blue"){
        console.log(color)
        return {
            lightColor: colors.lightBlue, 
            darkColor: colors.darkBlue,
        }
    }
    if(color === "yellow"){
        return {
            lightColor: colors.lightYellow, 
            darkColor: colors.darkYellow
        }
    }
    if(color === "green"){
        return {
            lightColor: colors.lightGreen, 
            darkColor: colors.darkGreen
        }
    }
    if(color === "red"){
        return{
            lightColor: colors.lightRed, 
            darkColor: colors.darkRed
        }
    }
    if(color === "purple"){
        return {
            lightColor: colors.lightPurple,
             darkColor: colors.darkPurple
        }
    } 
    if(color === "white"){
        return{
            lightColor: colors.white,
            darkColor: colors.white
        }
    }
    return {
        lightColor: colors.lightBlue, 
        darkColor: colors.darkBlue
    }  
}