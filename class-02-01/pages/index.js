import React from 'react';

function Badge({ children, color = 'blue' }) {
  return <span className={`badge badge-${color} ml-5`}>{children}</span>;
}

function PersonCard({ name, badge, role, avatarImage }) {
  return (
    <div class="card">
      <div class="card-top">
        <div class="left">
          <div class="card-title">
            {name} <Badge>{badge}</Badge>
          </div>
          <div class="card-subtitle">{role}</div>
        </div>
        <div class="right">
          <img class="avatar avatar-small" src={avatarImage} />
        </div>
      </div>
      <div class="card-bottom">
        <a href="#" class="card-action">
          <i class="icon fas fa-envelope"></i> Email
        </a>
        <a href="#" class="card-action">
          <i class="icon fas fa-phone-alt"></i> Call
        </a>
      </div>
    </div>
  );
}

function Page() {
  return (
    <>
      <div className="container">
        <div className="grid grid-three">
          <PersonCard name="Renato" badge="Admin" role="Regional Paradigm Technician" avatarImage="https://i.pravatar.cc/100?2" />
          <PersonCard name="Veridiana" badge="Admin" role="Regional Paradigm Technician" avatarImage="https://i.pravatar.cc/100?2" />
          <PersonCard name="Lins" badge="Admin" role="Regional Paradigm Technician" avatarImage="https://i.pravatar.cc/100?2" />
          <PersonCard name="Jane" badge="Admin" role="Regional Paradigm Technician" avatarImage="https://i.pravatar.cc/100?2" />
        </div>

        <div className="grid grid-four">
          <div className="card">
            <div className="card-top card-top-large">
              <img className="avatar" src="https://i.pravatar.cc/100?7" />
              <div>
                <div className="card-title">Jane Cooper</div>
                <div className="card-subtitle">Global Division Officer</div>
              </div>
              <Badge>Admin</Badge>
            </div>
            <div className="card-bottom">
              <a href="#" className="card-action">
                <i className="icon fas fa-envelope"></i> Email
              </a>
              <a href="#" className="card-action">
                <i className="icon fas fa-phone-alt"></i> Call
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-top card-top-large">
              <img className="avatar" src="https://i.pravatar.cc/100?8" />
              <div>
                <div className="card-title">Jane Cooper</div>
                <div className="card-subtitle">Global Division Officer</div>
              </div>
              <Badge>Admin</Badge>
            </div>
            <div className="card-bottom">
              <a href="#" className="card-action">
                <i className="icon fas fa-envelope"></i> Email
              </a>
              <a href="#" className="card-action">
                <i className="icon fas fa-phone-alt"></i> Call
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-top card-top-large">
              <img className="avatar" src="https://i.pravatar.cc/100?9" />
              <div>
                <div className="card-title">Jane Cooper</div>
                <div className="card-subtitle">Global Division Officer</div>
              </div>
              <Badge>Admin</Badge>
            </div>
            <div className="card-bottom">
              <a href="#" className="card-action">
                <i className="icon fas fa-envelope"></i> Email
              </a>
              <a href="#" className="card-action">
                <i className="icon fas fa-phone-alt"></i> Call
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-top card-top-large">
              <img className="avatar" src="https://i.pravatar.cc/100?10" />
              <div>
                <div className="card-title">Jane Cooper</div>
                <div className="card-subtitle">Global Division Officer</div>
              </div>
              <Badge>Admin</Badge>
            </div>
            <div className="card-bottom">
              <a href="#" className="card-action">
                <i className="icon fas fa-envelope"></i> Email
              </a>
              <a href="#" className="card-action">
                <i className="icon fas fa-phone-alt"></i> Call
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-top card-top-large">
              <img className="avatar" src="https://i.pravatar.cc/100?11" />
              <div>
                <div className="card-title">Jane Cooper</div>
                <div className="card-subtitle">Global Division Officer</div>
              </div>
              <Badge>Admin</Badge>
            </div>
            <div className="card-bottom">
              <a href="#" className="card-action">
                <i className="icon fas fa-envelope"></i> Email
              </a>
              <a href="#" className="card-action">
                <i className="icon fas fa-phone-alt"></i> Call
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-top card-top-large">
              <img className="avatar" src="https://i.pravatar.cc/100?12" />
              <div>
                <div className="card-title">Jane Cooper</div>
                <div className="card-subtitle">Global Division Officer</div>
              </div>
              <Badge>Admin</Badge>
            </div>
            <div className="card-bottom">
              <a href="#" className="card-action">
                <i className="icon fas fa-envelope"></i> Email
              </a>
              <a href="#" className="card-action">
                <i className="icon fas fa-phone-alt"></i> Call
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-top card-top-large">
              <img className="avatar" src="https://i.pravatar.cc/100?13" />
              <div>
                <div className="card-title">Jane Cooper</div>
                <div className="card-subtitle">Global Division Officer</div>
              </div>
              <Badge>Admin</Badge>
            </div>
            <div className="card-bottom">
              <a href="#" className="card-action">
                <i className="icon fas fa-envelope"></i> Email
              </a>
              <a href="#" className="card-action">
                <i className="icon fas fa-phone-alt"></i> Call
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-top card-top-large">
              <img className="avatar" src="https://i.pravatar.cc/100?14" />
              <div>
                <div className="card-title">Jane Cooper</div>
                <div className="card-subtitle">Global Division Officer</div>
              </div>
              <Badge>Admin</Badge>
            </div>
            <div className="card-bottom">
              <a href="#" className="card-action">
                <i className="icon fas fa-envelope"></i> Email
              </a>
              <a href="#" className="card-action">
                <i className="icon fas fa-phone-alt"></i> Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
