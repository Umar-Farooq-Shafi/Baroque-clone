using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Baroque.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GettingPicturesController : Controller
    {
        // GET: GettingPicturesController
        public ActionResult Index()
        {
            return View();
        }

        // GET: GettingPicturesController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: GettingPicturesController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: GettingPicturesController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: GettingPicturesController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: GettingPicturesController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: GettingPicturesController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: GettingPicturesController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
