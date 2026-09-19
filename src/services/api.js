const BASE_URL = 'https://6aaed711606bd915d11115c8.mockapi.io/courses';

export async function fetchCourses() {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch courses: ${response.status}`);
  }
  return response.json();
}

export async function fetchCourseById(id) {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch course ${id}: ${response.status}`);
  }
  return response.json();
}