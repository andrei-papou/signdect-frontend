export const predict = file => {
    const formData = new FormData();
    formData.append(file.name, file);
    return fetch('http://localhost:8080/', {
        method: 'POST',
        body: formData
    }).then(response => response.json());
};
