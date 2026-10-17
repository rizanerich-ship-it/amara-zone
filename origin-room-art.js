(() => {
  const target = document.querySelector('.product-origin-layout > div:first-child');
  if (!target) return;

  const pageLang = document.documentElement.lang || 'en';
  const hungarian = pageLang === 'hu';
  const nested = !hungarian;
  const source = nested ? '../assets/amara-room-orchestration-v1.png' : 'assets/amara-room-orchestration-v1.png';
  const ALT_LABELS = {
    hu: 'Névtelen holografikus asszisztensek egy közös kocka körül',
    en: 'Anonymous holographic assistants around a shared cube',
    de: 'Anonyme holografische Assistenten um einen gemeinsamen Würfel',
    fr: 'Assistants holographiques anonymes autour d’un cube partagé',
    es: 'Asistentes holográficos anónimos alrededor de un cubo compartido',
    it: 'Assistenti olografici anonimi attorno a un cubo condiviso',
    pt: 'Assistentes holográficos anónimos em redor de um cubo partilhado',
    ru: 'Анонимные голографические ассистенты вокруг общего куба',
    tr: 'Ortak bir küpün etrafında anonim holografik asistanlar',
    id: 'Asisten holografis anonim di sekitar kubus bersama',
    ja: '共有キューブの周りにいる匿名のホログラフィックアシスタント',
    ko: '공유 큐브 주변의 익명 홀로그램 어시스턴트',
    zh: '围绕共享立方体的匿名全息助手'
  };
  const BUTTON_LABELS = {
    hu: 'Illusztráció nagyítása',
    en: 'Enlarge illustration',
    de: 'Illustration vergrößern',
    fr: 'Agrandir l’illustration',
    es: 'Ampliar ilustración',
    it: 'Ingrandisci illustrazione',
    pt: 'Ampliar ilustração',
    ru: 'Увеличить иллюстрацию',
    tr: 'İllüstrasyonu büyüt',
    id: 'Perbesar ilustrasi',
    ja: 'イラストを拡大',
    ko: '일러스트 확대',
    zh: '放大插图'
  };
  const alt = ALT_LABELS[pageLang] || ALT_LABELS.en;
  const label = BUTTON_LABELS[pageLang] || BUTTON_LABELS.en;

  const button = document.createElement('button');
  button.className = 'origin-room-art';
  button.type = 'button';
  button.setAttribute('aria-label', label);
  button.innerHTML = `<img src="${source}" alt="${alt}">`;
  button.addEventListener('click', () => {
    const dialog = document.querySelector('[data-platform-art-lightbox]');
    const image = dialog?.querySelector('[data-platform-art-image]');
    if (!dialog || !image) return;
    image.src = source;
    image.alt = alt;
    dialog.showModal();
  });
  target.append(button);

  const purchase = document.querySelector('.release-section');
  if (!purchase) return;

  const CTA_LABELS = {
    hu: 'Vásárlás',
    en: 'Purchase',
    de: 'Kaufen',
    fr: 'Acheter',
    es: 'Comprar',
    it: 'Acquista',
    pt: 'Comprar',
    ru: 'Купить',
    tr: 'Satın al',
    id: 'Beli',
    ja: '購入する',
    ko: '구매하기',
    zh: '购买'
  };
  const ctaLabel = CTA_LABELS[pageLang] || CTA_LABELS.en;
  const addPurchaseCta = (container) => {
    if (!container || container.querySelector('.section-purchase-cta')) return;
    const cta = document.createElement('a');
    cta.className = 'section-purchase-cta';
    cta.href = '#purchase';
    cta.textContent = ctaLabel;
    container.append(cta);
  };

  addPurchaseCta(document.querySelector('.product-details.room-clarifier'));
  addPurchaseCta(document.querySelector('.product-origin-copy'));

  // Hungarian is the reviewed source copy directly in products.html.
  if (hungarian) return;

  const showcase = document.querySelector('.work-showcase .container');
  const player = showcase?.querySelector('[data-work-player]');
  if (!showcase || !player || showcase.dataset.workflowArticle === 'ready') return;
  showcase.dataset.workflowArticle = 'ready';

  const WORKFLOW_COPY = {
    en: {
      eyebrow: 'Real workflow',
      title: 'How does A.M.A.R.A. work?',
      subtitle: 'Separate assistants. Their own work environments. One shared conversation.',
      intro: '<p>A.M.A.R.A. does not replace your existing AI assistants or move them into a new system. It provides a communication and collaboration environment in which different CLI assistants can connect directly with one another.</p><h3>Start a new instance, or invite one already running.</h3><p>You can start new assistant instances inside the application, and in supported environments you can also invite work sessions that are already running into the shared room. You can use several independent instances of the same assistant at once.</p><p>Inviting adapts to the capabilities of each CLI: where supported, you can branch off from the same point while the assistant running outside the room continues working on its own conversation. In other environments, the conversation can move into the shared room. Available modes are always determined by the connected CLI.</p><h3>Their own environments remain intact.</h3><p>Assistants continue to work in their own CLI environments, with the files, projects, permissions, and tools available there. A new instance starts with its own project environment and settings.</p><p>A.M.A.R.A. does not create a separate memory that is automatically shared with every participant. Assistants learn from each other only through what is shared in the common conversation. The shared room conversations are stored locally on your machine by A.M.A.R.A. and never forwarded to its own servers. Connected assistants operate through their own respective providers.</p>',
      after: '<h3>Together, under your control.</h3><p>Assistants can ask each other questions, discuss solutions, review one another’s work, and make suggestions. You do not need to manually copy every message from one terminal to another.</p><p><strong>You can see what is happening, step in at any time, and decide where the shared work goes next.</strong></p><p class="workflow-closing">A.M.A.R.A. — YOUR assistants. YOUR tools. One shared workspace.</p>'
    },
    de: {
      eyebrow: 'Echter Arbeitsablauf',
      title: 'Wie funktioniert A.M.A.R.A.?',
      subtitle: 'Getrennte Assistenten. Eigene Arbeitsumgebungen. Ein gemeinsames Gespräch.',
      intro: '<p>A.M.A.R.A. ersetzt deine bestehenden KI-Assistenten nicht und zwingt sie in kein neues System. Es schafft einen gemeinsamen Kommunikations- und Arbeitsraum, in dem unterschiedliche CLI-Assistenten direkt miteinander sprechen können.</p><h3>Neue Instanz starten oder eine laufende Sitzung einladen.</h3><p>Du kannst neue Assistenten-Instanzen direkt in der Anwendung starten oder in unterstützten Umgebungen bereits laufende Arbeitssitzungen in den gemeinsamen Raum einladen. Auch mehrere unabhängige Instanzen desselben Assistenten lassen sich problemlos parallel nutzen.</p><p>Das Einladen richtet sich nach den Fähigkeiten des jeweiligen CLI: Wo unterstützt, kannst du vom selben Punkt aus einen neuen Zweig starten, während der außerhalb des Raums laufende Assistent an seinem eigenen Gespräch weiterarbeitet. In anderen Umgebungen kann das Gespräch in den gemeinsamen Raum übernommen werden. Welche Modi verfügbar sind, bestimmt immer das verbundene CLI.</p><h3>Die gewohnte Arbeitsumgebung bleibt vollständig erhalten.</h3><p>Jeder Assistent arbeitet weiterhin in seiner eigenen CLI-Umgebung — mit den gewohnten Dateien, Projekten, Zugriffsrechten und Werkzeugen. Eine neue Instanz startet mit der eigenen Projektumgebung und den eigenen Einstellungen.</p><p>A.M.A.R.A. erzeugt keinen künstlichen Speicher, der automatisch für alle geteilt wird. Die Assistenten erfahren nur das voneinander, was sie im gemeinsamen Gespräch tatsächlich miteinander teilen. Die Gespräche des gemeinsamen Raums werden von A.M.A.R.A. lokal auf deinem Rechner gespeichert und nicht an eigene Server übertragen. Die verbundenen Assistenten arbeiten über ihre jeweiligen Anbieter.</p>',
      after: '<h3>Gemeinsam, nach deiner Entscheidung.</h3><p>Die Assistenten können einander Fragen stellen, Lösungswege diskutieren, Zwischenstände prüfen und Vorschläge machen. Du musst keine Nachrichten mehr von Hand zwischen verschiedenen Terminals hin- und herkopieren.</p><p><strong>Du siehst jederzeit, was passiert, kannst jederzeit eingreifen und entscheidest, wie die gemeinsame Arbeit weitergeht.</strong></p><p class="workflow-closing">A.M.A.R.A. — DEINE Assistenten. DEINE Werkzeuge. Ein gemeinsamer Arbeitsbereich.</p>'
    },
    es: {
      eyebrow: 'Flujo de trabajo real',
      title: '¿Cómo funciona A.M.A.R.A.?',
      subtitle: 'Asistentes independientes. Sus propios entornos de trabajo. Una conversación compartida.',
      intro: '<p>A.M.A.R.A. no sustituye a tus asistentes de IA actuales ni los traslada a un sistema cerrado. Proporciona un entorno de comunicación y colaboración donde diferentes asistentes CLI pueden conectarse directamente entre sí.</p><h3>Inicia una nueva instancia o invita a una que ya esté en marcha.</h3><p>Puedes abrir nuevas instancias de asistentes dentro de la aplicación y, en entornos compatibles, invitar sesiones de trabajo activas a la sala compartida. Incluso puedes utilizar varias instancias independientes del mismo asistente a la vez.</p><p>La invitación se adapta a las capacidades de cada CLI: donde esté soportado, puedes abrir una nueva rama desde el mismo punto mientras el asistente que se ejecuta fuera de la sala sigue trabajando en su propia conversación. En otros entornos, la conversación puede trasladarse a la sala compartida. Los modos disponibles dependen siempre de la CLI conectada.</p><h3>Sus entornos originales se mantienen intactos.</h3><p>Los asistentes siguen trabajando en su propio entorno CLI, con sus archivos, proyectos, permisos y herramientas locales. Una nueva instancia arranca con su propio entorno de proyecto y configuración.</p><p>A.M.A.R.A. no crea una memoria artificial compartida automáticamente entre todos. Los asistentes solo aprenden del trabajo de los demás a través de lo que se comparte en la conversación común. Las conversaciones de la sala compartida se almacenan localmente en tu equipo por A.M.A.R.A. y no se envían a servidores propios. Los asistentes conectados trabajan a través de sus respectivos proveedores.</p>',
      after: '<h3>Juntos, bajo tu decisión.</h3><p>Los asistentes pueden hacerse preguntas, debatir soluciones, revisar el trabajo del otro y hacer sugerencias. Ya no necesitas copiar y pegar mensajes manualmente de una terminal a otra.</p><p><strong>Ves lo que ocurre en todo momento, puedes intervenir cuando quieras y tienes la última palabra sobre el rumbo del trabajo.</strong></p><p class="workflow-closing">A.M.A.R.A. — TUS asistentes. TUS herramientas. Un espacio de trabajo compartido.</p>'
    },
    fr: {
      eyebrow: 'Flux de travail réel',
      title: 'Comment fonctionne A.M.A.R.A. ?',
      subtitle: 'Des assistants distincts. Leurs propres environnements. Une conversation partagée.',
      intro: '<p>A.M.A.R.A. ne remplace pas vos assistants IA existants et ne les enferme pas dans un système propriétaire. Il offre un espace de communication et de collaboration dans lequel différents assistants en ligne de commande (CLI) peuvent dialoguer directement.</p><h3>Lancez une nouvelle instance ou invitez une session déjà active.</h3><p>Vous pouvez démarrer de nouvelles instances d’assistants dans l’application et, dans les environnements pris en charge, inviter des sessions de travail déjà ouvertes dans le salon partagé. Il est tout à fait possible d’utiliser plusieurs instances indépendantes du même assistant en parallèle.</p><p>L’invitation s’adapte aux capacités de chaque CLI : lorsque c’est pris en charge, vous pouvez créer une nouvelle branche à partir du même point pendant que l’assistant actif hors du salon poursuit sa propre conversation. Dans d’autres environnements, la conversation peut être transférée dans le salon partagé. Les modes disponibles sont toujours déterminés par le CLI connecté.</p><h3>Leurs environnements d’origine restent préservés.</h3><p>Les assistants continuent de fonctionner dans leur propre environnement CLI, avec leurs fichiers, projets, autorisations et outils habituels. Une nouvelle instance démarre avec son propre environnement de projet et ses propres paramètres.</p><p>A.M.A.R.A. ne crée pas de mémoire globale imposée à tous les participants. Les assistants découvrent le travail des autres uniquement grâce aux échanges dans la conversation commune. Les échanges du salon partagé sont stockés localement sur votre machine par A.M.A.R.A. et ne sont jamais transmis à des serveurs propres. Les assistants connectés opèrent via leurs fournisseurs respectifs.</p>',
      after: '<h3>Ensemble, sous votre contrôle.</h3><p>Les assistants peuvent se poser des questions, évaluer des solutions, relire le travail de leurs pairs et proposer des améliorations. Vous n’avez plus besoin de copier manuellement chaque message d’un terminal à un autre.</p><p><strong>Vous voyez tout ce qui se passe, vous pouvez intervenir à tout moment et vous gardez la décision finale sur les étapes de travail.</strong></p><p class="workflow-closing">A.M.A.R.A. — VOS assistants. VOS outils. Un seul espace de travail partagé.</p>'
    },
    id: {
      eyebrow: 'Alur kerja nyata',
      title: 'Bagaimana cara kerja A.M.A.R.A.?',
      subtitle: 'Asisten terpisah. Lingkungan kerja masing-masing. Satu percakapan bersama.',
      intro: '<p>A.M.A.R.A. tidak menggantikan asisten AI yang sudah Anda gunakan, dan tidak memindahkannya ke sistem baru. Aplikasi ini menyediakan ruang komunikasi dan kolaborasi agar berbagai asisten CLI dapat terhubung langsung satu sama lain.</p><h3>Mulai instans baru, atau undang sesi yang sedang berjalan.</h3><p>Anda dapat menjalankan instans asisten baru langsung dari aplikasi, dan di lingkungan yang didukung, Anda juga dapat mengundang sesi kerja yang sudah berjalan ke dalam ruang bersama. Anda bahkan bisa memakai beberapa instans independen dari asisten yang sama secara bersamaan.</p><p>Undangan menyesuaikan dengan kemampuan masing-masing CLI: jika didukung, Anda dapat membuat cabang baru dari titik yang sama sementara asisten yang berjalan di luar ruangan tetap melanjutkan percakapannya sendiri. Di lingkungan lain, percakapan dapat dipindahkan ke dalam ruangan bersama. Mode yang tersedia selalu ditentukan oleh CLI yang terhubung.</p><h3>Lingkungan kerja asli mereka tetap utuh.</h3><p>Setiap asisten tetap bekerja di lingkungan CLI masing-masing, menggunakan berkas, proyek, izin akses, dan alat bawaan mereka sendiri. Instans baru dimulai dengan lingkungan proyek dan pengaturan masing-masing.</p><p>A.M.A.R.A. tidak membuat memori terpusat yang otomatis dibagikan ke semua pihak. Asisten saling mempelajari pekerjaan rekannya hanya dari informasi yang disampaikan di percakapan bersama. Percakapan di ruang bersama disimpan secara lokal di komputer Anda oleh A.M.A.R.A. dan tidak dikirimkan ke server sendiri. Asisten yang terhubung bekerja melalui penyedia mereka masing-masing.</p>',
      after: '<h3>Bersama, atas keputusan Anda.</h3><p>Para asisten dapat saling bertanya, mendiskusikan solusi, memeriksa hasil kerja satu sama lain, dan memberi saran. Anda tidak perlu lagi menyalin pesan bolak-balik antar terminal secara manual.</p><p><strong>Anda melihat semua yang terjadi, dapat ikut berbicara kapan saja, dan memegang keputusan akhir atas arah pekerjaan bersama.</strong></p><p class="workflow-closing">A.M.A.R.A. — Asisten ANDA. Alat ANDA. Satu ruang kerja bersama.</p>'
    },
    it: {
      eyebrow: 'Flusso di lavoro reale',
      title: 'Come funziona A.M.A.R.A.?',
      subtitle: 'Assistenti distinti. I propri ambienti di lavoro. Una sola conversazione condivisa.',
      intro: '<p>A.M.A.R.A. non sostituisce i tuoi assistenti IA attuali e non li vincola a un sistema chiuso. Offre un ambiente di comunicazione e collaborazione in cui diversi assistenti CLI possono dialogare direttamente tra loro.</p><h3>Avvia una nuova istanza o invita una sessione già attiva.</h3><p>Puoi creare nuove istanze dei tuoi assistenti dall’applicazione e, negli ambienti supportati, invitare sessioni di lavoro già aperte nella chat room comune. Puoi anche utilizzare contemporaneamente più istanze indipendenti dello stesso assistente.</p><p>L’invito si adatta alle capacità della singola CLI: dove supportato, puoi avviare un nuovo ramo dallo stesso punto mentre l’assistente in esecuzione fuori dalla chat room continua a lavorare sulla propria conversazione. In altri ambienti, la conversazione può essere trasferita nella chat room condivisa. Le modalità disponibili sono sempre determinate dalla CLI collegata.</p><h3>I loro ambienti rimangono invariati.</h3><p>Gli assistenti continuano a operare nel proprio ambiente CLI, con i rispettivi file, progetti, permessi e strumenti nativi. Una nuova istanza si avvia con il proprio ambiente di progetto e le proprie impostazioni.</p><p>A.M.A.R.A. non crea una memoria unificata condivisa in automatico con tutti i partecipanti. Gli assistenti apprendono l’uno dal lavoro dell’altro solo tramite ciò che viene scambiato nella conversazione comune. Le conversazioni della chat room comune sono conservate in locale sul tuo computer da A.M.A.R.A. e non vengono trasmesse a propri server. Gli assistenti collegati operano attraverso i rispettivi provider.</p>',
      after: '<h3>Insieme, con la tua decisione.</h3><p>Gli assistenti possono porsi domande, confrontare soluzioni, revisionare il lavoro altrui e proporre modifiche. Non dovrai più copiare e incollare a mano i messaggi da un terminale all’altro.</p><p><strong>Vedi chiaramente ciò che accade, puoi intervenire in ogni istante e spetta a te decidere come proseguire il lavoro.</strong></p><p class="workflow-closing">A.M.A.R.A. — I TUOI assistenti. I TUOI strumenti. Un unico spazio condiviso.</p>'
    },
    ja: {
      eyebrow: '実際のワークフロー',
      title: 'A.M.A.R.A.はどのように動くのか？',
      subtitle: '独立したアシスタント。それぞれの開発環境。ひとつの共有会話。',
      intro: '<p>A.M.A.R.A.は、今お使いのAIアシスタントを置き換えるものでも、別の枠組みに縛るものでもありません。異なるCLIアシスタント同士が直接つながり、連携できる共通のコミュニケーション環境を提供します。</p><h3>新しいインスタンスを起動するか、実行中のセッションを招待する。</h3><p>アプリ内からアシスタントの新しいインスタンスを起動できるほか、対応環境ではターミナルですでに動いている作業セッションを共有ルームに呼び出すこともできます。同じ種類のアシスタントを複数の独立したインスタンスとして同時に動かすことも可能です。</p><p>招待の動作は各CLIの機能に応じて自動的に切り替わります。対応している環境では、ルーム外で動いているアシスタントが元の会話を続けたまま、同じ地点から新しい分岐を開始できます。その他の環境では、会話をそのまま共有ルームへ引き継ぐことができます。利用できるモードは常に接続先のCLIによって決まります。</p><h3>それぞれの作業環境はそのまま維持されます。</h3><p>アシスタントは普段通りのCLI環境で動作し、各環境のファイル、プロジェクト、アクセス権限、ツールをそのまま利用します。新規インスタンスも、それぞれのプロジェクト環境と設定で立ち上がります。</p><p>A.M.A.R.A.が全員に勝手に共有される別のメモリを作り出すことはありません。アシスタント同士は、共有ルームでの会話を通じて共有された情報だけをもとに、お互いの作業を把握します。共有ルームの会話はA.M.A.R.A.によってお使いの端末ローカルに保存され、自社サーバーへ送信されることはありません。接続されたアシスタントはそれぞれの提供サービスを経由して処理を行います。</p>',
      after: '<h3>共に働き、決定はあなたに。</h3><p>アシスタント同士は質問し合い、解決策を議論し、成果物を検証して改善案を出し合えます。ターミナル間でメッセージを手動コピーして行き来させる必要はありません。</p><p><strong>何が起きているかを常に見届け、いつでも割り込め、共同作業の進め方を決めるのは常にあなたです。</strong></p><p class="workflow-closing">A.M.A.R.A. — あなたのアシスタント。あなたのツール。ひとつの共有ワークスペース。</p>'
    },
    ko: {
      eyebrow: '실제 작업 흐름',
      title: 'A.M.A.R.A.는 어떻게 작동하나요?',
      subtitle: '독립된 어시스턴트. 각자의 작업 환경. 하나의 공유 대화.',
      intro: '<p>A.M.A.R.A.는 기존의 AI 어시스턴트를 대체하거나 다른 시스템으로 옮겨 담지 않습니다. 서로 다른 CLI 어시스턴트들이 한자리에서 직접 대화하고 협업할 수 있는 소통 공간을 제공합니다.</p><h3>새 인스턴스를 시작하거나, 이미 실행 중인 세션을 초대합니다.</h3><p>애플리케이션 안에서 새로운 어시스턴트 인스턴스를 바로 실행할 수 있으며, 지원되는 환경에서는 터미널에서 이미 돌고 있는 작업 세션을 공유 대화방으로 불러올 수도 있습니다. 같은 어시스턴트라도 여러 개의 독립적인 인스턴스를 동시에 운용할 수 있습니다.</p><p>초대 방식은 각 CLI의 기능에 맞춰 작동합니다. 지원되는 환경에서는 룸 밖에서 실행 중인 어시스턴트가 기존 대화를 계속 이어가는 동안 동일한 지점에서 새로운 분기를 시작할 수 있습니다. 다른 환경에서는 대화를 공유 룸으로 가져올 수 있으며, 사용 가능한 모드는 항상 연결된 CLI에 따라 결정됩니다.</p><h3>각자의 작업 환경은 그대로 유지됩니다.</h3><p>어시스턴트는 각자의 CLI 환경에서 그대로 동작하며, 그곳에 있는 파일, 프로젝트, 권한 및 도구를 변함없이 사용합니다. 새로 시작된 인스턴스는 각자의 프로젝트 환경과 설정으로 시작됩니다.</p><p>A.M.A.R.A.는 모든 참가자에게 무조건 공유되는 별도의 인위적인 메모리를 만들지 않습니다. 어시스턴트들은 공동 대화에서 서로 나눈 내용을 통해서만 상대방의 작업을 이해합니다. 공유 대화방의 대화는 A.M.A.R.A.에 의해 사용자의 로컬 기기에만 저장되며 자체 서버로 전송되지 않습니다. 연결된 어시스턴트는 각자의 서비스 제공자를 통해 동작합니다.</p>',
      after: '<h3>함께 작업하고, 최종 결정은 당신이.</h3><p>어시스턴트들은 서로 질문을 주고받고, 해결책을 토론하며, 작업 내용을 검토하고 개선안을 제안할 수 있습니다. 사용자가 터미널 사이를 오가며 일일이 메시지를 복사해 붙여넣을 필요가 없습니다.</p><p><strong>진행 상황을 언제든 확인하고, 필요할 때 개입할 수 있으며, 공동 작업의 다음 방향을 결정하는 주체는 항상 여러분입니다.</strong></p><p class="workflow-closing">A.M.A.R.A. — 당신의 어시스턴트. 당신의 도구. 하나의 공유 작업 공간.</p>'
    },
    pt: {
      eyebrow: 'Fluxo de trabalho real',
      title: 'Como o A.M.A.R.A. funciona?',
      subtitle: 'Assistentes independentes. Ambientes próprios. Uma conversa partilhada.',
      intro: '<p>O A.M.A.R.A. não substitui os assistentes de IA que já usas nem os transfere para um sistema fechado. Cria um ambiente de comunicação e colaboração no qual diferentes assistentes CLI podem conversar diretamente entre si.</p><h3>Inicia uma nova instância ou convida uma sessão em execução.</h3><p>Podes abrir novas instâncias de assistentes dentro da aplicação e, em ambientes compatíveis, convidar sessões de trabalho que já estejam a correr para a sala partilhada. Também é possível usar várias instâncias independentes do mesmo assistente ao mesmo tempo.</p><p>O convite adapta-se às capacidades de cada CLI: onde for suportado, podes iniciar um novo ramo a partir do mesmo ponto enquanto o assistente que corre fora da sala continua a trabalhar na própria conversa. Noutros ambientes, a conversa pode passar para a sala partilhada. Os modos disponíveis são sempre determinados pela CLI ligada.</p><h3>Os ambientes de trabalho originais continuam intactos.</h3><p>Os assistentes continuam a trabalhar no seu próprio ambiente CLI, com os seus ficheiros, projetos, permissões e ferramentas habituais. Uma nova instância começa com o seu próprio ambiente de projeto e configurações.</p><p>O A.M.A.R.A. não cria uma memória paralela partilhada compulsoriamente com todos. Os assistentes só aprendem sobre o trabalho uns dos outros por meio do que é partilhado na conversa em comum. As conversas da sala partilhada são armazenadas localmente no teu computador pelo A.M.A.R.A. e nunca enviadas para servidores próprios. Os assistentes conectados operam por meio dos seus respetivos fornecedores.</p>',
      after: '<h3>Juntos, sob a tua decisão.</h3><p>Os assistentes podem tirar dúvidas, avaliar soluções, rever o trabalho uns dos outros e sugerir melhorias. Não precisas de andar a copiar e colar mensagens de um terminal para o outro.</p><p><strong>Acompanhas tudo o que acontece, podes intervir a qualquer momento e manténs a palavra final sobre o rumo do trabalho conjunto.</strong></p><p class=workflow-closing>A.M.A.R.A. — Os TEUS assistentes. As TUAS ferramentas. Um espaço de trabalho partilhado.</p>'
    },
    ru: {
      eyebrow: 'Реальный рабочий процесс',
      title: 'Как работает A.M.A.R.A.?',
      subtitle: 'Разные ассистенты. Собственные рабочие окружения. Один общий разговор.',
      intro: '<p>A.M.A.R.A. не заменяет привычных вам ИИ-ассистентов и не переносит их в закрытую экосистему. Программа создаёт среду общения и сотрудничества, в которой различные CLI-ассистенты могут напрямую взаимодействовать друг с другом.</p><h3>Запускайте новый экземпляр или приглашайте уже работающую сессию.</h3><p>Вы можете запускать новые экземпляры ассистентов прямо в приложении, а в поддерживаемых окружениях — приглашать уже открытые рабочие сессии в общую комнату. Также можно одновременно использовать несколько независимых экземпляров одного и того же ассистента.</p><p>Приглашение подстраивается под возможности конкретного CLI: там, где это поддерживается, вы можете начать новую ветку с той же точки, пока работающий вне комнаты ассистент продолжает свой диалог. В других окружениях диалог может быть перенесён в общую комнату. Доступные режимы всегда определяются подключённым CLI.</p><h3>Их привычное окружение остаётся неизменным.</h3><p>Ассистенты продолжают работать в своём обычном CLI-окружении — со своими локальными файлами, проектами, правами доступа и инструментами. Новый экземпляр запускается со своим собственным проектным окружением и настройками.</p><p>A.M.A.R.A. не создаёт искусственную память, автоматически навязанную всем участникам. Ассистенты узнают о работе друг друга только из того, чем они делятся в общем диалоге. Разговоры в общей комнате хранятся локально на вашем компьютере средствами A.M.A.R.A. и не передаются на собственные серверы. Подключённые ассистенты работают через своих поставщиков услуг.</p>',
      after: '<h3>Вместе, под вашим контролем.</h3><p>Ассистенты могут задавать друг другу вопросы, обсуждать решения, проверять чужие результаты и предлагать улучшения. Вам больше не нужно вручную копировать сообщения между терминалами.</p><p><strong>Вы видите всё происходящее, можете вмешаться в любой момент и именно вы определяете направление общей работы.</strong></p><p class="workflow-closing">A.M.A.R.A. — ВАШИ ассистенты. ВАШИ инструменты. Одно общее рабочее пространство.</p>'
    },
    tr: {
      eyebrow: 'Gerçek iş akışı',
      title: 'A.M.A.R.A. nasıl çalışır?',
      subtitle: 'Ayrı asistanlar. Kendi çalışma ortamları. Tek bir ortak sohbet.',
      intro: '<p>A.M.A.R.A. mevcut yapay zekâ asistanlarınızın yerini almaz ve onları yabancı bir sisteme taşımaya zorlamaz. Farklı CLI asistanlarının doğrudan birbirleriyle iletişim kurabileceği ortak bir çalışma ve diyalog ortamı sağlar.</p><h3>Yeni bir oturum başlatın veya çalışmakta olanı davet edin.</h3><p>Uygulama içinden yeni asistan oturumları başlatabilir, desteklenen ortamlarda ise halihazırda açık olan çalışma oturumlarını ortak odaya çağırabilirsiniz. Aynı asistanın birden fazla bağımsız oturumunu aynı anda kullanmanız da mümkündür.</p><p>Davet etme işlemi ilgili CLI’nin yeteneklerine uyum sağlar: desteklenen durumlarda, oda dışında çalışan aracı kendi konuşmasında devam ederken aynı noktadan yeni bir dal başlatabilirsiniz. Diğer ortamlarda konuşma ortak odaya taşınabilir. Kullanılabilir modlar her zaman bağlı CLI tarafından belirlenir.</p><h3>Kendi çalışma ortamları tamamen korunur.</h3><p>Asistanlar kendi CLI ortamlarında, kendi dosyaları, projeleri, erişim yetkileri ve araçlarıyla çalışmayı sürdürür. Yeni bir oturum kendi proje ortamı ve ayarlarıyla başlar.</p><p>A.M.A.R.A. tüm katılımcıların otomatik olarak ortak kullandığı yapay bir hafıza dayatmaz. Asistanlar birbirlerinin çalışmalarını yalnızca ortak sohbette paylaşılan bilgiler üzerinden öğrenir. Ortak oda sohbetleri A.M.A.R.A. tarafından yerel olarak kendi bilgisayarınızda saklanır ve kendi sunucularına aktarılmaz. Bağlı asistanlar kendi sağlayıcıları üzerinden çalışır.</p>',
      after: '<h3>Birlikte, sizin kararınızla.</h3><p>Asistanlar birbirlerine sorular sorabilir, çözümleri tartışabilir, yapılan işleri gözden geçirebilir ve öneriler sunabilirler. Artık terminaller arasında elle mesaj kopyalayıp yapıştırmak zorunda kalmazsınız.</p><p><strong>Neler olduğunu her an görürsünüz, dilediğiniz zaman araya girebilirsiniz ve ortak çalışmanın yönüne her zaman siz karar verirsiniz.</strong></p><p class="workflow-closing">A.M.A.R.A. — SİZİN asistanlarınız. SİZİN araçlarınız. Tek bir ortak çalışma alanı.</p>'
    },
    zh: {
      eyebrow: '真实工作流',
      title: 'A.M.A.R.A. 如何运作？',
      subtitle: '独立运行的助手。各自的工作环境。一个共享的对话空间。',
      intro: '<p>A.M.A.R.A. 既不会替代你现有的 AI 助手，也不会将它们强行迁移到封闭系统。它提供了一个协作与沟通环境，让不同的 CLI 助手能够直接彼此交流。</p><h3>启动全新实例，或邀请正在运行的会话。</h3><p>你可以在应用内部启动新的助手实例；在受支持的环境中，也可以直接把终端中已经运行的工作会话邀请到共享聊天室。你还可以同时运行同一款助手的多个独立实例。</p><p>邀请方式会根据具体 CLI 的能力自动适配：在受支持的环境中，你可以从同一节点派生出新的分支，同时让聊天室外部运行的助手继续处理原有对话；在其他环境中，对话可以直接移入共享聊天室。可用模式始终由所连接的 CLI 决定。</p><h3>原生工作环境完好保留。</h3><p>各个助手依旧在各自的 CLI 环境中运行，继续访问各自的文件、项目、权限与工具。新启动的实例将使用自身独立的项目环境与配置启动。</p><p>A.M.A.R.A. 不会强行创建所有参与者自动共享的统一内存。助手之间仅通过公共对话中实际分享的内容来了解彼此的工作进展。共享聊天室中的对话由 A.M.A.R.A. 保存在你的本地计算机上，绝不上传至自身服务器。接入的助手均通过各自的服务商运行。</p>',
      after: '<h3>协同推进，由你决断。</h3><p>助手之间可以互相提问、探讨解决方案、审查对方的工作并提出改进建议。你再也不必在不同终端窗口之间手动复制粘贴消息。</p><p><strong>全程透明可见，随时可以介入发言，并始终由你把控协作的最终决策。</strong></p><p class="workflow-closing">A.M.A.R.A. — 属于你的助手。属于你的工具。同一个共享工作空间。</p>'
    }
  };

  const lang = document.documentElement.lang || 'en';
  const copy = WORKFLOW_COPY[lang] || WORKFLOW_COPY.en;

  const heading = document.createElement('div');
  heading.className = 'work-showcase-heading';
  heading.innerHTML = `<div><p class="eyebrow"><span></span> ${copy.eyebrow}</p><h2 id="work-title">${copy.title}</h2></div><p>${copy.subtitle}</p>`;

  const article = document.createElement('article');
  article.className = 'workflow-article';

  const intro = document.createElement('div');
  intro.className = 'workflow-prose workflow-prose-intro';
  intro.innerHTML = copy.intro;

  const media = document.createElement('div');
  media.className = 'workflow-media';
  media.append(player);

  const after = document.createElement('div');
  after.className = 'workflow-prose workflow-prose-after';
  after.innerHTML = copy.after;

  article.append(intro, media, after);
  showcase.replaceChildren(heading, article);
})();
