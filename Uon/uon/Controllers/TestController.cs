using Microsoft.AspNetCore.Mvc;

namespace uon.Controllers;

[Route("api")]
public class TestController : ControllerBase
{
    private IncService _incService;
    
    public TestController(IncService incService)
    {
        _incService = incService;
    }
    
    [HttpGet("ping")]
    public IActionResult Ping()
    {
        var t = new
        {
            val = $"pong {_incService.Count}"
        };
        return Ok(t);
    }
}