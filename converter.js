// Function to convert area between units
export function convertArea(value, fromUnit, toUnit) {
    const conversions = {
      'squareMeters': {
        'squareFeet': 10.7639,
        'squareYards': 1.19599
      },
      'squareFeet': {
        'squareMeters': 0.092903,
        'squareYards': 0.111111
      },
      'squareYards': {
        'squareMeters': 0.836127,
        'squareFeet': 9
      }
    };
  
    if (conversions[fromUnit] && conversions[fromUnit][toUnit]) {
      return value * conversions[fromUnit][toUnit];
    } else {
      return 'Invalid units or conversion not supported';
    }
  }
  
  