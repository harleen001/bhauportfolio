import React from "react";
import styles from "./Description.module.css";

const Description = () => {
    return (
        <section className={styles.container}>
            {/* Left Section: Experience */}
            <div className={styles.left}>
                <h2 className={styles.heading}>Experience</h2>
                <p><strong className="strong">PwC – Switzerland (Remote)</strong></p>
                <p className="text">Cybersecurity Intern | July 2024</p>
                <p className="text">Worked on cybersecurity simulations, network security, and risk assessments.</p>

                <p className="text"><strong className="strong">Freelancer (Contractual)</strong></p>
                <p className="text">Helped clients with security analysis, ethical hacking, data recovery, and system optimization.</p>
            </div>

            {/* Right Section: Skills */}
            <div className={styles.right}>
                <h2 className={styles.heading}>Technical Skills</h2>
                <p className="text"><strong className="strong">Languages:</strong> Python, C++, Java, JavaScript, HTML, CSS, PowerShell</p>
                <p className="text"><strong className="strong">Tools:</strong> Kali Linux, x64dbg, Unreal Engine, Vercel, Git, GitHub, Ghidra</p>
                <p className="text"><strong className="strong">Soft Skills:</strong> Communication, Problem-Solving, Analytical Thinking</p>
            </div>
        </section>
    );
};

export default Description;
