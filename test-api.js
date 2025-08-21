// Quick test to check if the API key works
const API_KEY = '9797285c57bb45d8a79989abae326c3d';
const BASE_URL = 'https://api.rawg.io/api';

async function testAPI() {
  try {
    console.log('Testing RAWG API with key:', API_KEY.substring(0, 8) + '...');
    
    const response = await fetch(`${BASE_URL}/games?key=${API_KEY}&page_size=5`);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log('✅ API Test Successful!');
    console.log('Games found:', data.results.length);
    console.log('First game:', data.results[0]?.name);
    
    return true;
  } catch (error) {
    console.error('❌ API Test Failed:', error);
    return false;
  }
}

testAPI();
