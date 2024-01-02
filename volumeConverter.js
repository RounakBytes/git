function convertVolume(fromVolume, fromUnit, toUnit) {
    let result;

    if (fromUnit === 'liters' && toUnit === 'gallons') {
        result = fromVolume * 0.264172;
    } else if (fromUnit === 'gallons' && toUnit === 'liters') {
        result = fromVolume * 3.78541;
    } else if (fromUnit === 'liters' && toUnit === 'cubic-meters') {
        result = fromVolume / 1000;
    } else if (fromUnit === 'cubic-meters' && toUnit === 'liters') {
        result = fromVolume * 1000;
    } else if (fromUnit === 'gallons' && toUnit === 'cubic-meters') {
        result = fromVolume / 264.172;
    } else if (fromUnit === 'cubic-meters' && toUnit === 'gallons') {
        result = fromVolume * 264.172;
    } else {
        result = fromVolume;
    }

    return result.toFixed(2);
}
