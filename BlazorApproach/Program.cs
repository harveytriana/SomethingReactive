using Microsoft.AspNetCore.Components.WebAssembly.Hosting;

using BlazorApproach;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

builder.RootComponents.Add<App>("#app");

await builder.Build().RunAsync();
