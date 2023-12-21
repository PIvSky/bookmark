const validEmail = /^(?<name>[a-zA-Z0-9.!#$%&*+=?^_`{|}~-]+)@(?<domain>[a-zA-Z0-9-]+)(?<tld>[.][a-zA-Z]{2,12})$/

export default validEmail;