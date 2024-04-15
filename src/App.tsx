import Link from "@mui/material/Link";
import "./App.css";
import TodoList from "./todo";
import { Button } from "@mui/material";

function App() {
  return (
    <div className="App">
      <TodoList />
      <div className="coder-info">
        Challenge by Eutina
      </div>
        <Link
        href="https://codesandbox.io/p/github/dfsfyt/todo/main?import=true&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clv14nyxw00063p6gn3knrq1t%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clv14nyxv00023p6gldwdimfi%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clv14nyxv00043p6gzp7q1buh%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clv14nyxv00053p6g55mdg5ey%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clv14nyxv00023p6gldwdimfi%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clv14nyxv00013p6g7cvm6mp8%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522clv14nyxv00023p6gldwdimfi%2522%252C%2522activeTabId%2522%253A%2522clv14nyxv00013p6g7cvm6mp8%2522%257D%252C%2522clv14nyxv00053p6g55mdg5ey%2522%253A%257B%2522id%2522%253A%2522clv14nyxv00053p6g55mdg5ey%2522%252C%2522activeTabId%2522%253A%2522clv14tyr900223d5u57yjcxi9%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522port%2522%253A3000%252C%2522taskId%2522%253A%2522start%2522%252C%2522id%2522%253A%2522clv14tyr900223d5u57yjcxi9%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%252C%2522clv14nyxv00043p6gzp7q1buh%2522%253A%257B%2522id%2522%253A%2522clv14nyxv00043p6gzp7q1buh%2522%252C%2522activeTabId%2522%253A%2522clv14nyxv00033p6g70s1asbz%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clv14nyxv00033p6g70s1asbz%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clv14o1hi0015dchj7foz5va6%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522id%2522%253A%2522clv14o202002y3p6g2w5pmes5%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D"
        sx={{color: 'white'}}
        className="demo-link"
        underline="always"
        target="_blank"
      >
        <Button variant="contained">Open Sandbox</Button>
      </Link>

      
    </div>
  );
}

export default App;
