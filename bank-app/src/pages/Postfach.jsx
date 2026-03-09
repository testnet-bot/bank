import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import MailList from '../components/MailList.jsx';
import MailDetail from '../components/MailDetail.jsx';
import { mailContents } from '../data/mails.js';

export default function Postfach() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  // prepare preview & date for MailList component
  const mails = mailContents.map(mail => ({
    ...mail,
    preview: mail.body.replace(/<[^>]+>/g, '').slice(0, 50) + '...',
    date: mail.meta.split('·').pop().trim(),
    unread: mail.subject.includes('⚠️') || mail.subject.includes('📄') || mail.subject.includes('🔐')
  }));

  return (
    <section className="page" id="page-postfach">
      <Header title="Postfach" subtitle={`${mails.filter(m => m.unread).length} ungelesene Nachrichten`} />
      <div className="postfach-layout">
        <MailList mails={mails} selectedIdx={selectedIdx} onSelect={setSelectedIdx} />
        <MailDetail mail={mails[selectedIdx]} />
      </div>
    </section>
  );
}
