import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  return `
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      🗂️ Sumfetch: summary display
@@@@@&&&&&&&&&&&&//////%%%%%%%@@@@@@@@@      -----------
@@@@@&&&&&&&&&&&#//////&&&&&&&@@@@@@@@@      💻 ABOUT
@@@@@&&&&&&&&&&///////%%%%%%%%@@@@@@@@@      🙇‍♂️ ${config.name}
@@@@@&&&&&&&&&&&////#%@@@@@@@@@@@@@@@@@      📃 <u><a href="${config.resume_url}" target="_blank">Resume</a></u>
@@@@@&&&&&&&&&//////%%%%%%%%%%@@@@@@@@@      😺 <u><a href="${config.repo}" target="_blank">Github Repo</a></u>
@@@@@%%%%%%%%(///////%%%%%%%%%@@@@@@@@@      📁 <u><a href="${config.Medium}" target="_blank">Medium</a></u>
@@@@@&&&&&&&&/////////&&&&&&&&@@@@@@@@@      -----------      
@@@@@%%%%%%///////////########@@@@@@@@@      🪪 CONTACT
@@@@@@@@@@@///////////&&&&&%@@@@@@@@@@@      ✉️ <u><a href="${config.email}" target="_blank">edianantarafi@gmail.com</a></u>
@@@@@@@@@@//////////////@%&%@@@@@@@@@@@      📇 <u><a href="${config.linkedin}" target="_blank">linkedin.com/in/mrafiediananta/</a></u>
@@@@@%%%%%//#/////////&#////@@@@@@@@@@@      📞 <u><a href="${config.whatsapp_url}" target="_blank">wa.me/08114444020</a></u>
@@@@@&&&&///@/////////##&&///@@@@@@@@@@      📲 <u><a href="${config.Instagram}" target="_blank">instagram.com/mrafi.ed/</a></u>
@@@@@&&&///%///////////&&&(%%@@@@@@@@@@      ----------
@@@@@&&&&/##///////////&&&&%%@@@@@@@@@@      
@@@@@&&&&((/////////////%%%%%%@@@@@@@@@
@@@@@&&&&&&///////@//////%%%%%@@@@@@@@@
@@@@@&&&&&&//////&&&//////&&&&@@@@@@@@@
@@@@@&&&&&/////@@@&&&&/////&&&@@@@@@@@@
@@@@@&&&(////%&&&&&&&&&/////@@@@@@@@@@@
@@@@@@@/////@@@@@@%%%%%%/////#@@@@@@@@@
@@@@@(////&&&&&&&&&&&&&&&/////%%%%#%@@@
@@@@@////@@@@@@@@@%%%%%%%%%/////(///@@@
@@@@@@////&&&&&&&&&@@@@@@@@@&&&&&&%%@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                
                                                               
`;
};

export default sumfetch;


//            ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  Summary
//         ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
//       ▓▓▀  ▄▓▀   ▓▓▓  ▀▓▓    ▓▓▄             ABOUT
//     ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            ${config.name}
//    ▓▓     ▓▓▓    ▓▓▓    ▐▓▓     ▓▓           <u><a href="${config.resume_url}" target="_blank">resume</a></u>
// ▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
// ▐▓                                 ▐▓       -----------
// ▐▓           > Portfolio           ▐▓        CONTACT
// ▐▓                                 ▐▓        <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
// ▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
//    ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
//     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           -----------
//       ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀            
//          ▀▓▓▄▄▓▓▓▄▓▓▄▓▓▓▄▄▓▓▀               
//             ▓▓▓▓▓▓▓▓▓▓▓▓▓▓

    