module.exports = response => {
      console.error(`
        status: ${response.status}
        statusText: ${response.statusText}
        url: ${response.config.url}
        method: ${response.config.method}
        data: { ${response.config.data} }
        `);
};