import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import AIChatWidget from "@/components/AIChatWidget";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Quote from "@/pages/Quote";
import Sitemap from "@/pages/Sitemap";
import ProductDetail from "@/pages/ProductDetail";
import ProjectDetail from "@/pages/ProjectDetail";
import Blog from "@/pages/Blog";
import BlogDetail from "@/pages/BlogDetail";
import AITools from "@/pages/AITools";
import FAQ from "@/pages/FAQ";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminProducts from "./pages/admin/Products";
import AdminProjects from "./pages/admin/Projects";
import AdminContacts from "./pages/admin/Contacts";
import AdminQuotes from "./pages/admin/Quotes";
import AdminSettings from "./pages/admin/Settings";
import AdminBlog from "./pages/admin/Blog";
import { AuthGuard } from "@/_core/components/AuthGuard";

function Router() {
  return (
    <Switch>
      {/* Public Routes */}
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/products"} component={Products} />
      <Route path={"/products/:id"} component={ProductDetail} />
      <Route path={"/projects"} component={Projects} />
      <Route path={"/projects/:id"} component={ProjectDetail} />
      <Route path={"/services"} component={Services} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/:slug"} component={BlogDetail} />
      <Route path={"/ai-tools"} component={AITools} />
      <Route path={"/faq"} component={FAQ} />
      <Route path={"/contact"} component={Contact} />
        <Route path="/quote" component={Quote} />
        <Route path="/sitemap" component={Sitemap} />
      
      {/* Admin Routes */}
      <Route path={"/admin"}>
        <AuthGuard requireOwner>
          <AdminDashboard />
        </AuthGuard>
      </Route>
      <Route path={"/admin/products"}>
        <AuthGuard requireOwner>
          <AdminProducts />
        </AuthGuard>
      </Route>
      <Route path={"/admin/projects"}>
        <AuthGuard requireOwner>
          <AdminProjects />
        </AuthGuard>
      </Route>
      <Route path={"/admin/contacts"}>
        <AuthGuard requireOwner>
          <AdminContacts />
        </AuthGuard>
      </Route>
      <Route path={"/admin/quotes"}>
        <AuthGuard requireOwner>
          <AdminQuotes />
        </AuthGuard>
      </Route>
      <Route path={"/admin/settings"}>
        <AuthGuard requireOwner>
          <AdminSettings />
        </AuthGuard>
      </Route>
      <Route path={"/admin/blog"}>
        <AuthGuard requireOwner>
          <AdminBlog />
        </AuthGuard>
      </Route>
      
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
          <AIChatWidget />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
