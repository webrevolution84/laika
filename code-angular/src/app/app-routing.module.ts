import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'landing-page1', loadChildren: () => import('./landing-page1/landing-page1.module').then(m => m.LandingPage1Module) },
  { path: 'landing-page2', loadChildren: () => import('./landing-page2/landing-page2.module').then(m => m.LandingPage2Module) },
  { path: 'landing-page3', loadChildren: () => import('./landing-page3/landing-page3.module').then(m => m.LandingPage3Module) },
  { path: 'about-us-1',loadChildren: () => import('./about/about-us-one/about-us-one.module').then(m => m.AboutUsOneModule) },
  { path: 'about-us-2', loadChildren: () => import('./about/about-us-two/about-us-two.module').then(m => m.AboutUsTwoModule)},
  { path: 'services',loadChildren: () => import('./pages/services/services.module').then(m => m.ServicesModule) },
  { path: 'our-team',loadChildren: () => import('./pages/our-team/our-team.module').then(m => m.OurTeamModule) },
  { path: 'pricing-plan',loadChildren: () => import('./pages/pricing-plan/pricing-plan.module').then(m => m.PricingPlanModule) },
  { path: 'clients',loadChildren: () => import('./pages/clients/clients.module').then(m => m.ClientsModule) },
  { path: 'faq',loadChildren: () => import('./pages/faq/faq.module').then(m => m.FaqModule) },
  { path: 'error-404',loadChildren: () => import('./pages/error404/error404.module').then(m => m.Error404Module) },
  { path: 'portfolio-2-columns', loadChildren: () => import('./portfolio/portfolio2columns/portfolio2columns.module').then(m => m.Portfolio2columnsModule)},
  { path: 'portfolio-3-columns', loadChildren: () => import('./portfolio/portfolio3columns/portfolio3columns.module').then(m => m.Portfolio3columnsModule)},
  { path: 'portfolio-4-columns', loadChildren: () => import('./portfolio/portfolio4columns/portfolio4columns.module').then(m => m.Portfolio4columnsModule)},
  { path: 'portfolio-details', loadChildren: () => import('./portfolio/portfolio-details/portfolio-details.module').then(m => m.PortfolioDetailsModule)},
  { path: 'blog',loadChildren: () => import('./blog/blog/blog.module').then(m => m.BlogModule) },
  { path: 'blog-detail',loadChildren: () => import('./blog/blog-detail/blog-detail.module').then(m => m.BlogDetailModule) },
  { path: 'blog-two-column',loadChildren: () => import('./blog/blog-two-column/blog-two-column.module').then(m => m.BlogTwoColumnModule) },
  { path: 'blog-three-column',loadChildren: () => import('./blog/blog-three-column/blog-three-column.module').then(m => m.BlogThreeColumnModule) },
  { path: 'blog-right-column',loadChildren: () => import('./blog/blog-right-column/blog-right-column.module').then(m => m.BlogRightColumnModule) },
  { path: 'contact-us-1', loadChildren: () => import('./contact-us/contact-us1/contact-us1.module').then(m => m.ContactUs1Module) },
  { path: 'contact-us-2', loadChildren: () => import('./contact-us/contact-us2/contact-us2.module').then(m => m.ContactUs2Module)},
  { path: 'cloud-hosting', loadChildren: () => import('./cloud-hosting/cloud-hosting.module').then(m => m.CloudHostingModule) },
  { path: 'cloud-analytics', loadChildren: () => import('./cloud-analytics/cloud-analytics.module').then(m => m.CloudAnalyticsModule)},
  { path: 'cloud-databases', loadChildren: () => import('./cloud-databases/cloud-databases.module').then(m => m.CloudDatabasesModule)},
  { path: 'cloud-media-services', loadChildren: () => import('./cloud-media-services/cloud-media-services.module').then(m => m.CloudMediaServicesModule)},
  { path: 'cloud-compute', loadChildren: () => import('./cloud-compute/cloud-compute.module').then(m => m.CloudComputeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
