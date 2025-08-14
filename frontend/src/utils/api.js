// // Mock implementation - in real app would use fetch/axios
// export const lookupPincode = async (pincode) => {
//   // Simulate API call
//   await new Promise(resolve => setTimeout(resolve, 500));
  
//   // Mock responses for different pincodes
//   const mockData = {
//     '110001': {
//       state: 'Delhi',
//       district: 'New Delhi'
//     },
//     '400001': {
//       state: 'Maharashtra',
//       district: 'Mumbai'
//     },
//     '600001': {
//       state: 'Tamil Nadu',
//       district: 'Chennai'
//     }
//   };
  
//   return mockData[pincode] || null;
// };

// In real application:

export const lookupPincode = async (pincode) => {
  const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
  const data = await response.json();
  
  if (data[0]?.Status === 'Success') {
    return {
      state: data[0].PostOffice[0].State,
      district: data[0].PostOffice[0].District
    };
  }
  return null;
};
