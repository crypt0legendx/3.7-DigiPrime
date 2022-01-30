const csrfToken = getCookie('csrftoken');

export const fetchRequest = async (resource, options : RequestInit = {}, useJwt : boolean = false) => { // Use options to pass extra headers
  if (csrfToken) {
    if (options.headers) {
      options.headers = {
        ...options.headers,
        'X-CSRFToken': csrfToken,
      };
    } else {
      options.headers = {
        'X-CSRFToken': csrfToken,
      };
    }
  }
  let response;
  try {
    response = await fetch(resource, options);
    if (response.redirected && response.url.includes('next=/')) {
      window.location.href = response.url.substring(0, response.url.indexOf('next=/') + 6);
    }
  } catch (error) {
    if(!error.status){
      return new Response(new ReadableStream(), {status: 520, statusText: 'NetworkError'});
    }
    return error;
  }
  return response;
};

function getCookie(name) {
  let cookieValue : string | null = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i = i + 1) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (`${name}=`)) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}