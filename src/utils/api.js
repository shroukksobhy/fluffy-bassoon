export async function fetchUserData(id) {
    const response = await fetch(`http://127.0.0.1:8000/api/user/${id}`); // Get User's info
    if (!response.ok) {
        throw new Error('Failed to fetch user data');
    }
    return response.json();
}
export async function updateProfileData(userData) {
    const response = await fetch('http://127.0.0.1:8000/api/user', {
        method: 'PUT', // or 'PATCH', depending on your API
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    if (!response.ok) {
        throw new Error('Failed to update user data');
    }
    return response.json();
}
export async function fetchCourseInfo(id) {
    const response = await fetch(`http://127.0.0.1:8000/api/courses/${id}`); // Get Course's info
    if (!response.ok) {
        throw new Error('Failed to fetch course data');
    }
    return response.json();
}
export async function fetchMyCoursesList(id) {
    const response = await fetch(`http://127.0.0.1:8000/api/courses/${id}`); // Get Course's info
    if (!response.ok) {
        throw new Error('Failed to fetch course data');
    }
    return response.json();
}

